#!/usr/bin/env python
import redis

from flask import Flask, request, jsonify
from flask_restful import reqparse, abort, Api, Resource
from flask_cors import CORS, cross_origin
from flask_socketio import SocketIO
import logging

import json
import requests
import sys

from ansible_module import ansible_manager

app = Flask(__name__)

logging.getLogger('flask_cors').level = logging.DEBUG
CORS(app, resources={r"/*":{"origins":"*"}})
logger = logging.getLogger('flask_cors')

socketio = SocketIO(app, engineio_options={'logger': True})



'''
This is where we hook our service into
the redis pub/sub
'''
def _handler(message):
    socketio.emit('ansible-message', message['data'], namespace='/juniper')


db = redis.StrictRedis(host='150.10.0.2', port=6379, db=0)
pub = db.pubsub(ignore_subscribe_messages=True)
pub.subscribe(**{'ansible-channel': _handler})

api = Api(app)

logger.debug('start of the application')

@app.route('/play', methods=["POST"])
def executePlay():
    try:
        socketio.emit('ansible-message', 'Play Received', namespace='/juniper')
        play = request.get_json()
        results = ansible_manager.create_and_run(play)
        return jsonify(results)
    except Exception, e:
        return jsonify(e)


@app.route('/slack-message', methods=["POST"])
def send_slack_message():
    try:
        body = request.get_json()
        logger.debug(body['message'])
        payload = {'token': slack_token, 'channel': 'general', 'text':body['message']}
        r = requests.post("https://slack.com/api/chat.postMessage", data=payload)
        return jsonify(r.json())
    except Exception, e:
        return jsonify(e)


@socketio.on('connect', namespace='/juniper')
def ws_conn():
    logger.debug('connected')
    socketio.emit('ansible-message', 'connected', namespace='/juniper')

    
@socketio.on('disconnect', namespace='/juniper')
def ws_disconn():
    socketio.emit('ansible-message', 'disconnected', namespace='/juniper')


@socketio.on_error_default
def default_error_handler(e):
    log = open('error.log', 'w')
    log.write(e)
    log.write(request.event["message"] + '\n') # "my error event"
    log.write(request.event["args"] + '\n')    # (data,)
    log.close()
    

if __name__ == '__main__':
    thread = pub.run_in_thread(sleep_time=0.1)
    socketio.run(app, host='0.0.0.0', debug=True)
