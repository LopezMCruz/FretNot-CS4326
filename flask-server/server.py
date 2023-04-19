#from durable.lang import *
from flask import Flask, request, abort,render_template, jsonify, redirect, url_for
import requests
from catalog import chords
from key import key

app = Flask(__name__)

# Initialize empty array, an index for every string
my_array = [None, None, None, None, None, None]



@app.route('/get_notes', methods=['GET'])
def get_notes():
    note = request.args.get('note')
    chord = request.args.get('chord')
    print(f"{note}{chord}")
    note = str(note)
    chord = str(chord)
    chordNote = (note+chord)  # Replace this with the actual result
    result = key.get(chordNote, None)
    if result is None:
        return jsonify({"error": "No Chord Found"})
    return jsonify(result)
    


#@app.route('/notes', methods=['GET'])
#def get_notes():
#    return jsonify(key)

@app.errorhandler(500)
def internal_error(error):
    return jsonify("No Chord Found.")


@app.route('/query', methods=['POST'])
def query():
    data = request.get_json()
    note = data['note']
    index = data['index']
    if note == my_array[index]:
        my_array[index] = None
    else:
        my_array[index] = note 
    print(f"{my_array}")
    query = ",".join(str(x) for x in my_array if x is not None)
    print(f"{query}")
    try:
        result = str(chords.get(query, "No Chord Found"))
        print(f"{result}")
        return jsonify({'chord': result}) # Change this line to include a key
    except KeyError:
        abort(500)  


@app.route("/discover")
def discover():
    return render_template("discover.html")

@app.route("/feedback_form")
def feedback():
    return render_template("feedback_form.html")  


@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/discovery")
def discovery():
    return render_template("discovery.html")



@app.route("/")
def home():
    return render_template("index.html")

if __name__=="__main__":
    app.run(debug=True)
