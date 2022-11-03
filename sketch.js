const containerEL = document.querySelector(".container");

let multiplyNumber = 16;

function getSquares(number) {
  totalSquares = number * number;
  return totalSquares;
}

function makeGrid() {
  let gridSize = getSquares(multiplyNumber);
  for (let i = 0; i < gridSize; i++) {
    let square = document.createElement("div");
    containerEL.appendChild(square).classList.add("board");
    containerEL.style.cssText = `--sketch-size: ${multiplyNumber}`;
  }
}
makeGrid();
