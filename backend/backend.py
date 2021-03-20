from flask import Flask, send_file, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
@app.route('/')
def output():
    return "Flask Server"


if __name__ == '__main__':
    app.run()
