const lab1 = document.getElementById('lab_1');
const lab3 = document.getElementById('lab_3');

function lab1ButtonClicked() {
    window.location.href = '../../COMP4537/labs/1/index.html';
}

function lab3ButtonClicked() {
    window.location.href = '../../COMP4537/labs/3/getDate';
}

lab1.addEventListener('click', lab1ButtonClicked);

lab3.addEventListener('click', lab3ButtonClicked);