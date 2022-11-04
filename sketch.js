const containerEL = document.querySelector(".container");
const sliderEL = document.getElementById("slider");
const displaySize = document.getElementById("canvas-size");

// slider for canvas size

makeCanvas(64);

function makeCanvas(canvasSize) {
  let size = Number(canvasSize) * Number(canvasSize);
  containerEL.style.cssText = `--canvas-size: ${canvasSize}`;
  for (let i = 0; i < size; i++) {
    let square = document.createElement("div");
    containerEL.appendChild(square).classList.add("board");
  }
  document.querySelectorAll(".board").forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "pink";
    });
  });
}

// Slider functionality

displaySize.innerText = sliderEL.value; // show initial slider value

sliderEL.addEventListener("mouseup", changeCanvasSize); // Change size of canvas

// display current slider value

sliderEL.oninput = function () {
  displaySize.innerText = this.value;
};

// remove childnodes & reset Canvas
function changeCanvasSize() {
  document.querySelectorAll(".board").forEach((item) => {
    item.remove();
  });
  canvasSize = sliderEL.value; // attach slidervalue to canvasSize variable
  makeCanvas(canvasSize); // invoke makeGrid with current Slider-value
}
