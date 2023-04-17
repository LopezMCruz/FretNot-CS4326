const notes = ['C', 'Cp', 'Db', 'D', 'Dp', 'Eb', 'E', 'F', 'Fp', 'Gb', 'G', 'Gp', 'Ab'];
const ids = ['min', 'maj', 'maj7', 'min7', 'aug', 'dom7', 'dim', 'maj9'];
let selectedNote = null;
let selectedChord = null;



notes.forEach(note => {
  const element = document.getElementById(note);
  element.addEventListener('click', () => {
    box1Click(element);
    selectedNote = note;
    if (selectedNote && selectedChord) {
      sendRequest(selectedNote, selectedChord);
    }
  });
});

ids.forEach(id => {
  const element = document.getElementById(id);
  element.addEventListener('click', () => {
    box2Click(element);
    selectedChord = id;
    if (selectedNote && selectedChord) {
      sendRequest(selectedNote, selectedChord);
    }
  });
});

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
}

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
}

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
  
  

  async function sendRequest(note, chord) {
    try {
      const response = await fetch(`/get_notes?note=${note}&chord=${chord}`);
      const data = await response.json();
      
      // Call the app.highlightNotes function with the fetched data
      app.highlightNotes(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  