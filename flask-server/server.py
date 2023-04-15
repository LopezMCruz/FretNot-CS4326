#from durable.lang import *
from flask import Flask, request, abort,render_template, jsonify, redirect, url_for
from catalog import chords

app = Flask(__name__)

# Looks up chord based on input
# chords argument is imported from catalog.py
# "from catalog import chords"
def show_chord(chords, value):
    chord = chords[value]
    if value in chords:
        return("chord: " + chord["chord"])
    else:
        return("not found")

# Initialize empty array, an index for every string
my_array = [None, None, None, None, None, None]

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
    query = ",".join(str(x) for x in my_array if x is not None)
    print(f"{query}")
    try:
        result = str(chords.get(query, "No Chord Found"))
        print(f"{result}")
        return jsonify({'chord': result}) # Change this line to include a key
    except KeyError:
        abort(500)    #new_chord = show_chord(chords, query)
    #print(f"Query: {query}")
    #print(f"Chord: {new_chord}")
    #return jsonify({'query': query})



@app.route('/selected_note', methods=['POST'])
def selected_note():
    data = request.get_json()
    note = data['note']
    index = data['index']
    
    # You can now use the note and index as required
    print(f"Selected note: {note}, String index: {index}")

    return jsonify({'success': True})    

@app.route('/update-and-get-chord', methods=['POST'])
def update_and_get_chord():
    query = ",".join(str(x) for x in my_array if x is not None)
    result = chords[query]    
    try:
        return jsonify({'chord': result})
    except KeyError:
        abort(500)

# dulplicate code is because the chord name needs to be calculated 
# everytime the chord is updated. This will need to be rewritten
# when I have more time
@app.route('/get_chord')
def get_chord():
    query = ",".join(str(x) for x in my_array if x is not None) 
    try:
        result = chords[query]
        print(f"{result}")
        return jsonify({'chord': result})
    except KeyError:
        abort(500)

@app.route("/feedback_form")
def feedback():
    return render_template("feedback_form.html")  


@app.route("/discovery")
def discovery_page():
    return render_template("discovery.html")


@app.route("/fretboard", methods=['GET','POST'])
def fretboard():
    return render_template("prototype_fretboard.html")


@app.route("/fretNot")
def new_fretboard():
    return render_template("index.html")

if __name__=="__main__":
    app.run(debug=True)
