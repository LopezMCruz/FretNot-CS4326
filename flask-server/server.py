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

@app.route('/update-array', methods=['POST'])
def update_array():
    value = request.json['value'] #gets the value from whatever note is active
    index = int(request.json['index']) #the index represents a string on the fretboard
    if value == my_array[index]: #this if statement removes the note if it is selected a second time
        my_array[index] = None
    else:
        my_array[index] = value # updates the array with the note ex: [None, E, C, None, A, None]
    # the array is converted to a string with the 'None' values stripped out
    query = ",".join(str(x) for x in my_array if x is not None) #ex: ex: [None, E, C, None, A, None] becomes E,C,E
    new_chord = show_chord(chords, query) #queries catalog.py for matching chords
    if new_chord == "":
        return "No Chord Found"
    else:
        return jsonify({'chord': new_chord})
    #return jsonify({'chord': new_chord}) #returns a json 

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
    try:
        result = chords[query]
        print(f"{result}")
        return jsonify({result})
    except KeyError:
        abort(500)
    #new_chord = show_chord(chords, query)
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

#this is the middle man tha lets the program use the array from /update-array
@app.route('/update-and-get-chord', methods=['POST'])
def update_and_get_chord():
    update_array()
    return redirect(url_for('get_chord'))

# dulplicate code is because the chord name needs to be calculated 
# everytime the chord is updated. This will need to be rewritten
# when I have more time
@app.route('/get_chord')
def get_chord():
    query = ",".join(str(x) for x in my_array if x is not None) 
    new_chord = show_chord(chords, query)
    if new_chord == "":
        return "No Chord Found"
    else:
        return jsonify({'chord': new_chord})

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
