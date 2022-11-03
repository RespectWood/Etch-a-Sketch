const containerEL = document.querySelector(".container");
const sliderEL = document.getElementById("slider");
const displaySize = document.getElementById("canvas-size");

let canvasSize = 32;

// slider for canvas size

displaySize.innerText = sliderEL.value;

sliderEL.oninput = function () {
  displaySize.innerText = this.value;
  canvasSize = this.value;
};

// Create columns & rows for canvas.

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
