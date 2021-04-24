/* 👇 Start writing your p5.js code here */
function setup() {
  createCanvas(1450, 800);
  frameRate(10);
}

function draw() {
  background(0);
  noStroke();
  for (var i = 0; i < 30; i++) {
    fill(255, 255, 255, random(755));
    ellipse(random(1450), random(800), random(10));
}
  fill(165,82,42)
  rect(700, 600, 60, 80);
  fill(36, 96, 8);
  triangle(400, 600, 725, 50, 1051, 600);
  fill(255,255,0);
  circle(725, 30, 50);
  light(725, 150);
	light(760, 325);
	light(800, 450);
  light(625, 400);
	light(525, 500);
	light(700, 250);
  light(850, 550);
	light(650, 560);
  fill(255);
  star(mouseX, mouseY, 5, 11.6, 5);
}
function star(x, y, radius1, radius2, npoints) {
var angle = TWO_PI / npoints;
var halfAngle = angle / 2.0;
beginShape();
for (var a = 0; a < TWO_PI; a += angle) {
  var sx = x + cos(a) * radius2;
  var sy = y + sin(a) * radius2;
  vertex(sx, sy);
  sx = x + cos(a + halfAngle) * radius1;
  sy = y + sin(a + halfAngle) * radius1;
  vertex(sx, sy);
}
endShape(CLOSE);
}

function light(x, y) {
	var c;
	c = floor(random(1, 3.5));
	var v;
	if (c === 1) {
		v = [255, 0, 0];
	}
	if (c === 2) {
		v = [0, 0, 255];
	}
	if (c === 3) {
	 v = [0,255,0];
	}
	stroke(v);
	strokeWeight(50);
	point(x, y);
}