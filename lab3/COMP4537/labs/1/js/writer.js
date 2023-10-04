const notesContainer = document.getElementById('notes-container');
const addButton = document.getElementById('add-button');
const lastSavedElement = document.getElementById('last-saved');
let notes = JSON.parse(localStorage.getItem('notes')) || [];
console.log("notes: ", notes    );
const backButton = document.getElementById('back-button');

const textAreaString = "TEXTAREA";
const buttonString = "BUTTON";
const backButtonString = '../../../COMP4537/labs/1/index.html';
const brString = "BR";

class Note {
    constructor(innerText) {
        const textArea = document.createElement(textAreaString);
        this.textArea = textArea;
        const currentTime = new Date()
        this.noteID = currentTime.toLocaleTimeString();

        const removeButton = document.createElement(buttonString);
        this.removeButton = removeButton;

        this.text = "";
        this.innerText = textArea.value;
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

    // remove() {
    //     notesContainer.removeChild(this.textArea);
    //     notesContainer.removeChild(this.removeButton);
    // }

}

//converts the notes into actual note objects
//from the JSON strings
//and then adds them to the notes array
// let notesJSON = localStorage.getItem("notes");
// if (notesJSON) {
//   try {
//     let parsedNotes = JSON.parse(notesJSON);
//     if (Array.isArray(parsedNotes)) {
//       notes = (parsedNotes.map(() => {
//         var newNote = new Note(
//         );
//         return newNote;
//       }));
//     }
//   } catch (error) {
//     console.error("Error parsing \"notes\" from localStorage:", error);
//   }
// }

function removeNote() {
    // notes[0].remove();
    // notes.splice(notes.indexOf(this), 1);
    // notes.shift();
    const textAreaToRemove = notes[0].textArea;
    const buttonToRemove = notes[0].removeButton;
    if (textAreaToRemove && textAreaToRemove.parentNode) {
      textAreaToRemove.parentNode.removeChild(textAreaToRemove);
    }
    if (buttonToRemove && buttonToRemove.parentNode) {
      buttonToRemove.parentNode.removeChild(buttonToRemove);
    }

    notes.forEach(element => {
        if (element.noteID === textAreaToRemove) {
            notes.splice(notes.indexOf(element), 1);
        }
      });
    notes.splice(0, 1); 
    saveNotes();
}

//create note object and add to notes array
function addNote() {
    const note = new Note();
    notes.push(note);
    saveNotes();
}

addButton.addEventListener('click', addNote);


function updateTime() {
    const currentTime = new Date()
    lastSavedElement.textContent
    = `Stored at: ${currentTime.toLocaleTimeString()}`;

}

function saveNotes() {
    console.log(JSON.stringify(notes));
    localStorage.setItem('notes', JSON.stringify(notes));
}

function updateText() {
    notes.forEach(element => {
        element.innerText = element.textArea.value;
      });
}

function updateNotes() {
    //getting new notes
    notes = JSON.parse(localStorage.getItem("notes")) || [];

    notesContainer.innerHTML = "";
    notes.forEach(element => {
        const newTextArea = document.createElement(textAreaString);
        const newButton = document.createElement(buttonString);
        newButton.innerHTML = "Remove";
        newTextArea.value = element.innerText;
    
        notesContainer.appendChild(document.createElement(brString));
        notesContainer.appendChild(newTextArea);
        notesContainer.appendChild(newButton);
        newButton.addEventListener('click', removeNote);
      });
}

updateNotes();
updateTime();
saveNotes();
updateText();

setInterval(function () {
    saveNotes();
    updateTime();
    updateText();
  }, 2000);

function clickBackButton() {
    window.location.href = backButtonString;
}

backButton.addEventListener('click', clickBackButton);
