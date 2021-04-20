/* 👇 Start writing your p5.js code here */
function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
}

function draw() {
  background(0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(50);
}

document.getElementById("demo").onclick = function() {myFunction()};

function displayResult() {
  alert("Kunstwerk wordt gemaakt, dit kan enkele maanden duren!");
}