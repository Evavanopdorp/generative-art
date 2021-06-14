let key = null;
let r = null;
let useLights = true;
const words = [
	{text: 'Merry christmas', x: -240},
	{text: 'Vrolijk kerstfeest', x: -220},
	{text: 'Frohe Weihnachten', x: -220},
	{text: 'Feliz Navidad', x: -180},
	{text: 'Glædelig jul', x: -180},
	{text: 'Joyeux Noël', x: -150},
	{text: 'Nollaig Shona', x: -180},
];
let snowflakes = []; 
let word;

let rendeer;

let font;
function preload() {
  font = loadFont('FrontageCondensed-Bold 2.otf');
  word = words[floor(random(0, words.length ))];
}

function mouseClicked() {
	if(useLights === true) {
		lights.push({ x: mouseX - width/2, y: mouseY - height/2});
	}
}

class Snowflake {
	constructor() {
		this.posX = random(-700, 700);
		this.posY = random(-500, 0);
		this.initialangle = random(0, 50 * PI);
		this.size = random(2, 10);
		this.radius = sqrt(random(pow(width / 2, 2)));
	}

	update() {
		// x position follows a circle
		let w = 0.6;
		// different size snowflakes fall at slightly different y speeds
		this.posY += pow(this.size, 0.5);

		// delete snowflake if past end of screen
		if (this.posY > height) {
			let index = snowflakes.indexOf(this);
			snowflakes.splice(index, 1);
		}
	};

	display() {
		push();
		ellipse(this.posX, this.posY, this.size);
		pop();
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

let lights = [];

function light(x,y) {
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
	fill(v);
	translate(x,y, 10);
	sphere(10,10,10)
}

function draw() {
	if(keyIsDown(84)) {
		word = words[floor(random(0, words.length ))];
	}
	if(keyIsDown(67)) {
		lights = [];
		snowflakes = [];
	}
	// verwijderd alle sneeuwfloken als der meer dan 100 zijn.
	if(snowflakes.length >= 700) {
		snowflakes = [];
	}
	let t = frameCount / 60;
	for (let i = 0; i < random(2); i++) {
		snowflakes.push(new Snowflake());
	}
	background(0);
  	fill(random(255),random(255),0);
  	textSize(50);
  	textFont(font);
  	text(word.text,word.x,-280);
	noStroke();
	push();
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
	// checken of lampen aanstaan
	if(useLights === true) {
		// laat een bol zien voor elke punt waar een lamp moet
		lights.forEach((currentLight) => {
			push();
			light(currentLight.x, currentLight.y);
			pop();
		});
	}
	stroke(0);
	const c = color(0, 131, 1);
	fill(c);
	// code voor maken van onderkant van boom
	translate(0, 300, -1);
	box(190, 10, 190);
	// code voor generen van boom segment
	for(i = 1; i < r + 1; i++) {
		translate(0, -20, -1);
		box(190 - (10 * i), 10, 190 - (10 * i));
		translate(0, -20, -1);
		box(150 - (10 * i), 30, 150 - (10 * i));
	}
	// code voor de bovenkant van de boom
	translate(0, -20, -1);
	box(190 - (10 * r * 2), 10, 190 - (10 * r * 2));
	translate(0, -10, -1);
	box(150 - (10 * r * 2), 10, 150 - (10 * r * 2));
	translate(0, -10, -1);
	box(130 - (10 * r * 2), 10, 130 - (10 * r * 2));
	pop();
	fill(255);
	for (let flake of snowflakes) {
		flake.update(t); // update snowflake position
		flake.display(); // draw snowflake
	  }
}