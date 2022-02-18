document.addEventListener('DOMcontentLoaded', () => {
  const grid = document.querySelector('.grid')
  const squares = Array.from(document.querySelectorAll('.grid div'))
  console.log(squares);
  const ScoreDisplay = document.querySelector('#score')
  const StartBtn = document.querySelector('#start-button')
  const width = 10
  
  // The tetrominoes
  const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const zTetromino = [
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1],
    [0, width,width+1,width*2+1],
    [width+1, width+2, width*2, width*2+1]  
  ]

  const tTetromino = [
    [1, width, width+1, width+2],
    [1, width+1, width+2, width*2+1],
    [width, width+1, width+2, width*2+1],
    [1, width, width+1, width*2+1]
  ]

  const oTetromino = [
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1]
  ]

  const iTetromino = [
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3],
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3]
  ]

  const theTertrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

  const currentPosition = 4
  const current = theTertrominoes[0][0]

  // draw the first rotation
  function draw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.add('.tetromino')
    });
  }

  draw();
})