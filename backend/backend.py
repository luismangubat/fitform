from flask import Flask, send_file, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
@app.route('/')
def output():
    return "Flask Server"


# @app.route('/upload', methods=['POST'])
# def uploadVideo():



if __name__ == '__main__':
    app.run()
