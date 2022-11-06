const containerEL = document.querySelector(".container");
const sliderEL = document.querySelector(".slider");
const showSliderValue = document.getElementById("canvas-size");

// color buttons

let colorChoice = "#006666";
let pencilChoice = colorChoice;

const pencilEL = document.getElementById("pencilbtn");
const eraserEL = document.getElementById("eraser");
const clearEL = document.getElementById("clear");
const colorPickerEL = document.getElementById("color-selector");

// colorpicker

colorPickerEL.addEventListener("input", initializeColor, false);
colorPickerEL.addEventListener("change", watchColorPicker, false);

function initializeColor(event) {
  colorChoice = event.target.value;
}

function watchColorPicker(event) {
  colorChoice = event.target.value;
  pencilChoice = event.target.value;
}

// pencil button
pencilEL.onclick = () => {
  colorChoice = pencilChoice;
};

eraserEL.onclick = () => {
  colorChoice = "#ffffff";
};

clearEL.onclick = () => {
  document.querySelectorAll(".board").forEach((item) => {
    item.style.backgroundColor = "#ffffff";
  });
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

showSliderValue.innerText = `${sliderEL.value}px`; // show initial slider value

sliderEL.addEventListener("mouseup", changeCanvasSize); // Change size of canvas

// display current slider value

sliderEL.oninput = function () {
  showSliderValue.innerText = `${this.value}px`;
};

// remove childnodes & reset Canvas

function changeCanvasSize() {
  document.querySelectorAll(".board").forEach((item) => {
    item.remove();
  });
  canvasSize = sliderEL.value; // attach slidervalue to canvasSize variable
  makeCanvas(canvasSize); // invoke makeCanvas with current slider-value
}
