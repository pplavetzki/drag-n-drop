#!/usr/bin/env python
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
# CORS(app)

logging.getLogger('flask_cors').level = logging.DEBUG
CORS(app, resources={r"/*":{"origins":"*"}})

socketio = SocketIO(app, engineio_options={'logger': True})

api = Api(app)

@app.route('/play', methods=["POST"])
def executePlay():
    try:
        play = request.json
        results = ansible_manager.create_and_run(play)
        return jsonify(results)
    except Exception, e:
        return jsonify(e)

@socketio.on('connect', namespace='/juniper')
def ws_conn():
    socketio.emit('ansible-message', 'connected', namespace='/juniper')
    
@socketio.on('disconnect', namespace='/juniper')
def ws_disconn():
    pass

@socketio.on_error_default
def default_error_handler(e):
    log = open('error.log', 'w')
    log.write(e)
    log.write(request.event["message"] + '\n') # "my error event"
    log.write(request.event["args"] + '\n')    # (data,)
    log.close()

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', debug=True)