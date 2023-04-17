
const ids = ['min', 'maj', 'maj7', 'min7', 'aug', 'dom7', 'dim', 'maj9'];
let selectedNote = null;
let selectedChord = null;

ids.forEach(id => {
  const element = document.getElementById(id);
  element.addEventListener('click', () => {
    box2Click(element);
  });
});

const notes = ['C', 'Cp', 'Db', 'D', 'Dp', 'Eb', 'E', 'F', 'Fp', 'Gb', 'G', 'Gp', 'Ab'];

notes.forEach(note => {
  const element = document.getElementById(note);
  element.addEventListener('click', () => {
    box1Click(element);
  });
});

const keyMap = {
    'maj': document.getElementById('maj'),
    'maj7': document.getElementById('maj7'),
    'min': document.getElementById('min'),
    'min7': document.getElementById('min7'),
    'aug': document.getElementById('aug'),
    'dom7': document.getElementById('dom7'),
    'dim': document.getElementById('dim'),
    'maj9': document.getElementById('maj9')
  };
  
  function box2Click(key) {
    const currentKey = Object.keys(keyMap).find(k => keyMap[k] === key);
    if (!currentKey) {
      key.style.backgroundColor = 'yellow';
      return;
    }
    key.style.backgroundColor = 'yellow';
    for (const k in keyMap) {
      if (k !== currentKey) {
        keyMap[k].style.backgroundColor = 'aqua';
      }
    }
     selectedChord = currentKey;
     // Check if both a note and a chord are selected, then send the request
    if (selectedNote && selectedChord) {
    sendRequest(selectedNote, selectedChord);
  }
}

  const noteMap = {
    'C': document.getElementById('C'),
    'Cp': document.getElementById('Cp'),
    'Db': document.getElementById('Db'),
    'D': document.getElementById('D'),
    'Dp': document.getElementById('Dp'),
    'Eb': document.getElementById('Eb'),
    'E': document.getElementById('E'),
    'F': document.getElementById('F'),
    'Fp': document.getElementById('Fp'),
    'Gb': document.getElementById('Gb'),
    'G': document.getElementById('G'),
    'Gp': document.getElementById('Gp'),
    'Ab': document.getElementById('Ab')
  };
  
  function box1Click(key) {
    const currentNote = Object.keys(noteMap).find(note => noteMap[note] === key);
    if (!currentNote) {
      key.style.backgroundColor = 'yellow';
      return;
    }
    key.style.backgroundColor = 'yellow';
    for (const note in noteMap) {
      if (note !== currentNote) {
        noteMap[note].style.backgroundColor = 'aqua';
      }
    }
    selectedNote = currentNote;
  
  // Check if both a note and a chord are selected, then send the request
  if (selectedNote && selectedChord) {
    sendRequest(selectedNote, selectedChord);
  }
}

async function sendRequest(note, chord) {
  try {
    const response = await fetch(`/get_notes?note=${note}&chord=${chord}`);
    const data = await response.json();
    
    // Process the data received from the server (e.g., display the result)
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}