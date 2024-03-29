let chordSoundElement;

const scalesChordsApiScript = document.querySelector('script[src="https://www.scales-chords.com/api/scales-chords-api.js"]');

scalesChordsApiScript.addEventListener('load', () => {
  console.log('scales-chords API script loaded');
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');
  init();
});
function init(){
  console.log('Init function called');



const notes = ['C', 'Cs', 'Db', 'D', 'Ds', 'Eb', 'E', 'F', 'Fs', 'Gb', 'G', 'Gs', 'Ab'];
const ids = ['m', 'maj', 'maj7', 'm7', 'aug', 'dom7', 'dim', 'maj9'];
let selectedNote = null;
let selectedChord = null;



notes.forEach(note => {
  const element = document.getElementById(note);
  element.addEventListener('click', () => {
    console.log('Note button clicked:', note);
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
    console.log('Note button clicked:', id);
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
    key.style.backgroundColor = '#B8336A';
    return;
  }
  key.style.backgroundColor = '#B8336A';
  for (const k in keyMap) {
    if (k !== currentKey) {
      keyMap[k].style.backgroundColor = '#2B303A';
    }
  }
}

function box1Click(key) {
  const currentNote = Object.keys(noteMap).find(note => noteMap[note] === key);
  if (!currentNote) {
    key.style.backgroundColor = '#B8336A';
    return;
  }
  key.style.backgroundColor = '#B8336A';
  for (const note in noteMap) {
    if (note !== currentNote) {
      noteMap[note].style.backgroundColor = '#2B303A';
    }
  }
}

const keyMap = {
    'maj': document.getElementById('maj'),
    'maj7': document.getElementById('maj7'),
    'm': document.getElementById('m'),
    'm7': document.getElementById('m7'),
    'aug': document.getElementById('aug'),
    'dom7': document.getElementById('dom7'),
    'dim': document.getElementById('dim'),
    'maj9': document.getElementById('maj9')
  };
  
  

  const noteMap = {
    'C': document.getElementById('C'),
    'Cs': document.getElementById('Cs'),
    'Db': document.getElementById('Db'),
    'D': document.getElementById('D'),
    'Ds': document.getElementById('Ds'),
    'Eb': document.getElementById('Eb'),
    'E': document.getElementById('E'),
    'F': document.getElementById('F'),
    'Fs': document.getElementById('Fs'),
    'Gb': document.getElementById('Gb'),
    'G': document.getElementById('G'),
    'Gs': document.getElementById('Gs'),
    'Ab': document.getElementById('Ab')
  };
  
  

  async function sendRequest(note, chord) {
    try {
      const response = await fetch(`/get_notes?note=${note}&chord=${chord}`);
      const data = await response.json();
        
      // Call the app.highlightNotes function with the fetched data
      app.highlightNotes(data);
    
      // Update the chord attribute of the <ins> tag
  chordSoundElement.setAttribute('chord', `${note}${chord.replace(':', '')}`);

  // Update the audio sources with the new chord
  updateChord(`${note}${chord.replace(':', '')}`);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    console.log(chordSoundElement.getAttribute('chord'));
    console.log(chordSoundElement);

  }
  
  
   chordSoundElement = document.querySelector('#chordSound');
   console.log(chordSoundElement);

  noteMap['C'].click();
  keyMap['maj'].click();
}

function updateChord(chord) {
  const audioElement = chordSoundElement.querySelector('audio');
  const sources = audioElement.querySelectorAll('source');
  const newChord = chord.replace(':', '');

  sources.forEach((source) => {
    const oldSrc = source.getAttribute('src');
    const newSrc = oldSrc.replace(/snd-guitar-chord-([A-Za-z0-9#]+)/, `snd-guitar-chord-${newChord}`);
    source.setAttribute('src', newSrc);
  });

  audioElement.load();
}

scalesChordsApiScript.addEventListener('load', init);
document.addEventListener('readystatechange', () => {
  if (document.readyState === 'complete') {
    init();
  }
});
