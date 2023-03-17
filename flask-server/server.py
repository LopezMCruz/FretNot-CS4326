from flask import Flask, request, make_response, jsonify
from catalog import chords


app = Flask(__name__)

# Looks up chord based on input
def show_chord(chords, value):
    chord = chords[value]
    if value in chords:
        return("chord: " + chord["chord"])
    else:
        return("not found")

# passes chord to the web page
@app.route("/")
def get_chord():
    value = "2,x,1,3,x,x,A#,G,C#"
    new_chord=show_chord(chords, value)
    return jsonify(new_chord)

if __name__=="__main__":
    app.run(debug=True)

