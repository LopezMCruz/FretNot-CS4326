from durable.lang import *
from flask import Flask, request, make_response
import sqlite3
import json

app = Flask(__name__)

@app.route("/members")
def members():
    return{"members": ["Member1","Member2","Member3"]}

if __name__=="__main__":
    app.run(debug=True)

