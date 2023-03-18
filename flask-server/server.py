#from durable.lang import *
from flask import Flask, request, make_response,render_template

import sqlite3
import json

app = Flask(__name__)

@app.route("/")
@app.route("/members")
def members():
    test = "test template"
    return render_template("Fret.html",member=members,testing = test )#test is just for testing purpose
    #return {"members": ["Member1","Member2","Member3"]}
@app.route("/feedback_form")
def feedback():
    return render_template("feedback_form.html")  

if __name__=="__main__":
    app.run(debug=True)

