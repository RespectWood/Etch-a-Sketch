const containerEL = document.querySelector(".container");
const sliderEL = document.getElementById("slider");
const showSliderValue = document.getElementById("canvas-size");

// color buttons

let colorChoice = "#00FFFF";
let pencilChoice = "";

const pencilEL = document.getElementById("pencilbtn");
const babyGreenEL = document.getElementById("color2");
const eraserEL = document.getElementById("eraser");
const colorPickerEL = document.getElementById("color-selector");

colorPickerEL.addEventListener("input", updateFirst, false);
colorPickerEL.addEventListener("change", watchColorPicker, false);

function updateFirst(event) {
  colorChoice = event.target.value;
}

function watchColorPicker(event) {
  colorChoice = event.target.value;
}

pencilEL.onclick = () => {
  pencilChoice = colorChoice;
};

// babyGreenEL.onclick = () => {
//   colorChoice = "#b3ff99";
// };

eraserEL.onclick = () => {
  colorChoice = "#ffffff";
};

makeCanvas(32);

function makeCanvas(canvasSize) {
  let size = Number(canvasSize) * Number(canvasSize);
  containerEL.style.cssText = `--canvas-size: ${canvasSize}`;

  for (let i = 0; i < size; i++) {
    let square = document.createElement("div");
    square.classList.add("board");
    square.addEventListener("mouseover", setColor);
    square.addEventListener("mousedown", setColor);
    containerEL.appendChild(square);
  }
}

// only paint on mouseIsDown = true
let mouseIsDown = false;

// change boolean variable on action
containerEL.onmousedown = () => {
  mouseIsDown = true;
};
containerEL.onmouseup = () => {
  mouseIsDown = false;
};

function setColor(e) {
  if (e.type === "mouseover" && !mouseIsDown) return; // if mouseIsDown = false, stop painting.
  e.target.style.backgroundColor = colorChoice;
}

// Slider functionality

showSliderValue.innerText = sliderEL.value; // show initial slider value

sliderEL.addEventListener("mouseup", changeCanvasSize); // Change size of canvas

// display current slider value

sliderEL.oninput = function () {
  showSliderValue.innerText = this.value;
};

// remove childnodes & reset Canvas

function changeCanvasSize() {
  document.querySelectorAll(".board").forEach((item) => {
    item.remove();
  });
  canvasSize = sliderEL.value; // attach slidervalue to canvasSize variable
  makeCanvas(canvasSize); // invoke makeCanvas with current slider-value
}
