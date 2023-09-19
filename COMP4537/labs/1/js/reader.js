const storedTime = document.getElementById('stored-time-writer');
const notesContainer = document.getElementById('notes-container');
const lastUpdated = document.getElementById('last-updated');
let notes = JSON.parse(localStorage.getItem('notes')) || [];
const backButton = document.getElementById('back-button');

const textAreaString = "TEXTAREA";
const brString = "BR";
const backButtonString = '../../../COMP4537/labs/1/index.html';

function updateTime() {
    //time updating
    const currentTime = new Date()
    lastUpdated.textContent
    = `Updated at: ${currentTime.toLocaleTimeString()}`;
    
}

function updateNotes() {
    //getting new notes
    notes = JSON.parse(localStorage.getItem("notes")) || [];
    console.log(notes);

    notesContainer.innerHTML = "";
    notes.forEach(element => {
        const newTextArea = document.createElement(textAreaString);
        newTextArea.value = element.text;
        newTextArea.readOnly = true;
    
        notesContainer.appendChild(document.createElement(brString));
        notesContainer.appendChild(newTextArea);
      });
}

updateTime();
updateNotes();

setInterval(function () {
    updateNotes();
    updateTime();
  }, 2000);



function clickBackButton() {
    window.location.href = backButtonString;
}

backButton.addEventListener('click', clickBackButton);