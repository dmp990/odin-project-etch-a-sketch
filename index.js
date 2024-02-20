let grid_size = 16;
const sideLength = 640;

const bodyElement = document.querySelector("body");
const gridContainer = document.querySelector(".grid-container");

// Add a button to enable user input
const button = document.createElement("button");
button.innerText = "Enter the number of squares";
let input = 0;
button.addEventListener("click", () => {
  while (input < 1 || input > 100) {
    input = prompt("Enter number upto 100");
    if (input === null) break;
  }
  if (input !== null) {
    removeGrid();
    grid_size = input;
    input = 0;
    generateGrid();
  }
});

// Add as first child
bodyElement.insertBefore(button, bodyElement.firstChild);

gridContainer.style.width = `${sideLength}px`;
gridContainer.style.height = `${sideLength}px`;
gridContainer.style.margin = "auto";

generateGrid();

function generateGrid() {
  for (let i = 0; i < grid_size; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("salmon-box");
    newDiv.style.height = `${sideLength / grid_size}px`;
    gridContainer.appendChild(newDiv);

    for (let j = 0; j < grid_size; j++) {
      const newDiv2 = document.createElement("div");
      newDiv2.classList.add("peachpuff-box");
      newDiv2.addEventListener("mouseenter", mouseEntered);
      //newDiv2.addEventListener("mouseleave", mouseLeft);
      newDiv2.style.width = `${sideLength / grid_size}px`;
      newDiv2.style.height = `${sideLength / grid_size}px`;
      newDiv.appendChild(newDiv2);
    }
  }
}

function removeGrid() {
  let divs = document.querySelectorAll(".peachpuff-box");
  divs.forEach((div) => {
    div.remove();
  });
}

function mouseEntered(e) {
  const bgColor = {
    h: Math.random() * 352,
    s: 100,
    l: Math.random() * (80 - 40) + 80,
  };
  e.srcElement.style.backgroundColor = `rgb(${bgColor.h}, ${bgColor.s}, ${bgColor.l})`;
}