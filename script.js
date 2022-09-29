const grid = document.getElementById('grid');
const squares = Array.from(document.querySelectorAll('.grid div'));
const startBtn = document.getElementById('start');
const score = document.getElementById('score');
// width
const width = 10;

showAlert = () => {
    alert('HI!');
} 

startBtn.addEventListener('click', showAlert);