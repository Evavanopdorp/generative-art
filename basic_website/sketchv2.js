/* 👇 Start writing your p5.js code here */


function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
  fill('rgb(0,255,0)');
  detailX = createSlider(2, 24, 12);
  detailX.position(10, height + 5);
  detailX.style('width', '80px');


}

function draw() {
  background(51);
  stroke('#fae');
  strokeWeight(4);
  rotateY(millis() / 1000);
  ellipsoid(200, 200, 200  , detailX.value(), 8);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}