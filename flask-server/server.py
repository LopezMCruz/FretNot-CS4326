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


notes = []

# Initialize empty array
my_array = [None, None, None, None, None, None]
my_array2 = [None, None, None, None, None, None]

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/update-array', methods=['POST'])
def update_array():
  value = request.json['value']
  index = int(request.json['index'])
  if value == my_array[index]:
    my_array[index] = None
  else:
    my_array[index] = value
  for i in range(len(my_array)):
    if my_array is None:
        my_array2[index] = '0'
    else:
        my_array2[index] = 'x'
  query = arr2string(my_array, my_array2)       
  print(query)
  return ''

def arr2string(array1, array2):
    combined_string = ''
    for i in range(len(array1)):
        combined_string += array1[i] + ' ' + array2[i] + ', '
    combined_string = combined_string[:-2]
    return combined_string

#@app.route("/")
#@app.route("/members")
#def members():
#    test = "test template"
#    return render_template("Fret.html",member=members,testing = test )#test is just for testing purpose
    #return {"members": ["Member1","Member2","Member3"]}

@app.route("/feedback_form")
def feedback():
    return render_template("feedback_form.html")  
@app.route("/discovery")
def discovery_page():
    return render_template("discovery.html")

@app.route("/fretboard")
def fretboard():
    return render_template("prototype_fretboard.html")

if __name__=="__main__":
    app.run(debug=True)

