let key = null;
let r = null;
let useLights = false;
const words = ['Merry Christmas']

var Font;
function preload() {
  Font = loadFont('Merry Xmas.ttf');
}

function drawLight() {
	if(useLights === true) {
		lights.push({x: mouseX, y: mouseY});
	}
}

let canvas
function setup() {
	canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);
	r = floor(Math.random() * 9);
	if(r < 3) {
		r += 3;
	}
}

const lights = [];

function light(x, y) {
	const c = floor(random(1, 3.5));
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
  push();
	fill(v);
  ellipse(x,y,30, 30)
  pop();  
}

function draw() {
  canvas.mouseOver(drawLight)
	background(0);
  fill(random(255),random(255),0);
  textSize(50);
  textFont(Font);
  text(words,-280,-280);
	noStroke();
  push()
	for (var i = 0; i < 300; i++) {
    translate(-100,-100)
		fill(255, 255, 255, random(755));
		ellipse(Math.floor(Math.random() * windowWidth),Math.floor(Math.random() *  windowHeight), random(10));
	}
  pop();
	if (keyIsDown(LEFT_ARROW)) {
		key = "left";
	} else if(keyIsDown(RIGHT_ARROW)) {
		key = "right";
	}
	if(keyIsDown(32)) {
		key = null;
	}
	if(key) {
		rotateY(frameCount * (key === "right" ? 0.01 : -0.01));
	}
	if(keyIsDown(76)) {
		useLights = !useLights;
	}
  if(keyIsDown(82)) {
    window.location.reload();
  }
	stroke(0);
	const c = color(0, 131, 1);
	fill(c);
	rotateY(150);
	// code voor maken van onderkant van boom
	translate(0, 300);
	box(190, 10, 190);
	// code voor generen van boom segment
	for(i = 1; i < r + 1; i++) {
		translate(0, -20);
		box(190 - (10 * i), 10, 190 - (10 * i));
		translate(0, -20);
		box(150 - (10 * i), 30, 150 - (10 * i));
	}
	// code voor de bovenkant van de boom
	translate(0, -20);
	box(190 - (10 * r * 2), 10, 190 - (10 * r * 2));
	translate(0, -10);
	box(150 - (10 * r * 2), 10, 150 - (10 * r * 2));
	translate(0, -10);
	box(130 - (10 * r * 2), 10, 130 - (10 * r * 2));
	// checken of lampen aanstaan
	if(useLights === true) {
		// laat een bol zien voor elke punt waar een lamp moet
		lights.forEach((currentLight) => {
			light(currentLight.x, currentLight.y);
		});
	}
}