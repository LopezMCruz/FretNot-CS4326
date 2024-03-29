const fretboard = document.querySelector('.fretboard')

const notesFlat = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const notesSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

let accidentals = 'flats';
const guitarTuning = [4, 11, 7, 2, 9, 4];

const singleFretMarkPositions = [3, 5, 7, 9, 15, 17, 19, 21];
const doubleFretMarkPositions = [12, 24];



const app = {
    init(){
        this.setup();
    },

    setup() {
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

                let noteName = this.createNoteNames(fret + guitarTuning[i]);
                noteFret.setAttribute('data-note', noteName);

                noteFret.addEventListener('click', function() {
                    if (noteFret.classList.contains('selected')) {
                        noteFret.classList.remove('selected');
                        selectedNoteFret = null;
                    } else {
                        if (selectedNoteFret) {
                            selectedNoteFret.classList.remove('selected');
                        }
                        noteFret.classList.add('selected');
                        selectedNoteFret = noteFret;
                    }
                });

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



    createNoteNames(noteIndex){
        noteIndex = noteIndex %  12; 
        let noteName;
        if(accidentals === 'flats'){
            noteName = notesFlat[noteIndex];
        } else if(accidentals === 'sharps'){
            noteName = notesSharp[noteIndex];
        }
        return noteName;
    },

    // setupHover(){
    //     fretboard.addEventListener('mouseover', (event))
    // }
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