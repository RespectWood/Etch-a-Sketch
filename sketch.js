const containerEL = document.querySelector(".container");
let canvasSize = 16;

// Create columns/rows for sketchboard.

function makeGrid() {
  let gridSize = getSquares(canvasSize);

  for (let i = 0; i < gridSize; i++) {
    let square = document.createElement("div");
    containerEL.appendChild(square).classList.add("board");
    containerEL.style.cssText = `--canvas-size: ${canvasSize}`;
  }
}
makeGrid();

// add event listener to each cell and paint

document.querySelectorAll(".board").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "pink";
  });
});

// Multiplier.

function getSquares(number) {
  totalSquares = number * number;
  return totalSquares;
}
