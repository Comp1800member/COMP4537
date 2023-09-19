const notesContainer = document.getElementById('notes-container');
const addButton = document.getElementById('add-button');
const lastSavedElement = document.getElementById('last-saved');
let notes = [];
const backButton = document.getElementById('back-button');


class Note {
    constructor() {
        const textArea = document.createElement("TEXTAREA");
        this.textArea = textArea;

        const removeButton = document.createElement("BUTTON");
        this.removeButton = removeButton;

        this.text = "";
        removeButton.innerHTML = "Remove";

        notesContainer.appendChild(textArea);
        notesContainer.appendChild(removeButton);

        removeButton.addEventListener('click', removeNote);

        //Adding event listener to text area
        //so that the text updates when user adds text
        this.textArea.addEventListener("input", () => {
            this.updateText();
          });
    }

    remove() {
        notesContainer.removeChild(this.textArea);
        notesContainer.removeChild(this.removeButton);
    }

    updateText() {
        this.text = this.textArea.value;
    }

}

function removeNote() {
    notes[0].remove();
    notes.shift();
}

//create note object and add to notes array
function addNote() {
    const note = new Note();
    notes.push(note);
}

addButton.addEventListener('click', addNote);


function updateTime() {
    const currentTime = new Date()
    lastSavedElement.textContent
    = `Stored at: ${currentTime.toLocaleTimeString()}`;

}

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

updateTime();
saveNotes();

setInterval(function () {
    saveNotes();
    updateTime();
  }, 2000);

function clickBackButton() {
    window.location.href = '../../../COMP4537/labs/1/index.html';
}

backButton.addEventListener('click', clickBackButton);
