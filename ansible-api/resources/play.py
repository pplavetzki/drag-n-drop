import json
import requests

from flask import Flask, request, jsonify

from ansible_module import ansible_manager


def executePlay():
    try:
        play = request.json
        results = ansible_manager.create_and_run(play)
        return jsonify(results)
    except Exception, e:
        return jsonify(e)