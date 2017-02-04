import json
import requests

from flask import Flask, request, jsonify

@application.route('/play', methods=["POST"])
def executePlay():
    if request.method == "POST":
        json_dict = json.loads(request.body.raw)
        tasks = json_dict['tasks']

        return jsonify(tasks)
