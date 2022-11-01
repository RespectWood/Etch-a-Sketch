const container = document.querySelector(".grid");
const squareEL = document.createElement("div");
squareEL.classList.add("board");
container.appendChild(squareEL);

function makeGrid() {
  for (let i = 1; i < 16; i++) {
    let square = document.createElement("div");
    container.appendChild(square).classList.add("board");
  }
}
makeGrid();
