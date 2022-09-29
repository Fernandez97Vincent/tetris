const grid = document.getElementById('grid');
const squares = Array.from(document.querySelectorAll('.grid div'));
const startBtn = document.getElementById('start');
const score = document.getElementById('score');
// width
const width = 10;

// creating shapes of tetrominos
const tetrominoL = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const tetrominoZ = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tetrominoT = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const tetrominoO = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const tetrominoI = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

  const allTetrominos = [tetrominoL, tetrominoZ, tetrominoT, tetrominoO, tetrominoI];

  let currentPosition = 4;
  let currentRotation = 0;
  // select tetrominos randomly
  const randomTetromino = Math.floor(Math.random()*allTetrominos.length);
  console.log(randomTetromino);
  let current = allTetrominos[randomTetromino][currentRotation];

  // add clast list tetromino to all 
  function draw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.add('tetromino');
    })
  }

  function undraw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.remove('tetromino');
    })
  }

  // create a function that moves the tetrominos down every second - setinterval 1000
  timerId = setInterval(goDown, 1000);

  function goDown() {
    undraw();
    currentPosition += width;
    draw();
  }
