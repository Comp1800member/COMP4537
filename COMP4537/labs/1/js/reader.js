const storedTime = document.getElementById('stored-time-writer');
const notesContainer = document.getElementById('notes-container');
const lastUpdated = document.getElementById('last-updated');
let notes = JSON.parse(localStorage.getItem('notes')) || [];
const backButton = document.getElementById('back-button');


function updateTime() {
    //time updating
    const currentTime = new Date()
    lastUpdated.textContent
    = `Stored at: ${currentTime.toLocaleTimeString()}`;
    
}

function updateNotes() {
    //getting new notes
    notes = JSON.parse(localStorage.getItem("notes")) || [];
    console.log(notes);

    notesContainer.innerHTML = "";
    notes.forEach(element => {
        const newTextArea = document.createElement("TEXTAREA");
        newTextArea.value = element.text;
        newTextArea.readOnly = true;
    
        notesContainer.appendChild(document.createElement("br"));
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
    window.location.href = 'index.html';
}

backButton.addEventListener('click', clickBackButton);