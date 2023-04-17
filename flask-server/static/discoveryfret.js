const fretboard = document.querySelector('.fretboard')

const notesFlat = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "Cbb", "Dbb", "Ebb", "Fbb", "Gbb", "Abb", "Bbb"];
const notesSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C##", "D##", "E##", "F##", "G##", "A##", "B##"];

const guitarTuning = [4, 11, 7, 2, 9, 4];

const singleFretMarkPositions = [3, 5, 7, 9, 15, 17, 19, 21];
const doubleFretMarkPositions = [12, 24];

const app = {
    accidentals: 'flats',

    init: async function () {
        const note = 'C'; // Replace with the actual note value
        const chord = 'maj'; // Replace with the actual chord value
        const notesData = await this.fetchNotes(note, chord);
        this.setup(this.accidentals);
        this.highlightNotes(notesData);
    },

    setup(accidentals) {
        fretboard.innerHTML = '';

        for (let i = 0; i < 6; i++) {
            let string = tools.createElement('div');
            string.classList.add('string');
            fretboard.appendChild(string);

            let selectedNoteFret;

            for (let fret = 0; fret <= 12; fret++) {
                let noteFret = tools.createElement('div');
                noteFret.classList.add('note-fret');
                string.appendChild(noteFret);

                let noteName = this.createNoteNames(fret + guitarTuning[i], this.accidentals, 0); // Pass 0 as the alteration value
                noteFret.setAttribute('data-note', noteName);


                if (i === 0 && singleFretMarkPositions.indexOf(fret) !== -1) {
                    noteFret.classList.add('single-fretmark');
                }

                if (i === 0 && doubleFretMarkPositions.indexOf(fret) !== -1) {
                    let doubleFretMark = tools.createElement('div');
                    doubleFretMark.classList.add('double-fretmark');
                    noteFret.appendChild(doubleFretMark);
                }
            }
        }
    },

    

    async fetchNotes(note, chord) {
        // Change accidentals to sharps for augmented chords
        if (chord === 'aug') {
            this.accidentals = 'sharps';
        } else if (chord === 'dim7' && note === 'C') {
            this.accidentals = 'flats';
        } else {
            // Reset to flats for other chords (if needed)
            this.accidentals = 'flats';
        }
    
        const response = await fetch(`/get_notes?note=${note}&chord=${chord}`);
        const data = await response.json();
        if (data.error) {
            console.error(data.error);
            return [];
        }
        return data;
    },
    
    

    createNoteNames(noteIndex, accidentals, alteration) {
        noteIndex = noteIndex % 12;
        let noteName;
        if (accidentals === 'flats') {
            noteName = notesFlat[noteIndex + alteration];
        } else if (accidentals === 'sharps') {
            noteName = notesSharp[noteIndex + alteration];
        }
        return noteName;
    },
    

    highlightNotes: function (fetchedNotes) {
        this.deselectNotes(); // Add this line to deselect the previous notes
        const strings = document.querySelectorAll('.string');
    
        strings.forEach((string, i) => {
            if (fetchedNotes[i] !== null) {
                const noteFret = string.querySelector(`.note-fret[data-note="${fetchedNotes[i]}"]`);
                if (noteFret) {
                    noteFret.classList.add('selected');
                }
            }
        });
    },

    deselectNotes: function () {
        const selectedNotes = document.querySelectorAll('.note-fret.selected');
        selectedNotes.forEach(noteFret => {
            noteFret.classList.remove('selected');
        });
    }
    
    
    
}

const tools = {
    createElement(element, content){
        element = document.createElement(element);
        if(arguments.length > 1){
            element.innerHTML = content;
        }
        return element;
    }
}

app.init();
