let key = null;
let r = null;
let useLights = false;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
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
  fill(v);
  translate(-10, - 10);
  sphere(24, 24, 24);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
      key = 'left';
  } else if(keyIsDown(RIGHT_ARROW)) {
      key = 'right';
  }
  if(keyIsDown(32)) {
    key = null;
  }
  if(key) {
    rotateY(frameCount * (key === 'right' ? 0.01 : -0.01));
  }
  if(keyIsDown(76)) {
    useLights = !useLights;
  }
  stroke(0);
  background(220);
  const c = color(0, 131, 1);
  fill(c);
  rotateY(150);

  translate(0, 300);
  box(190, 10, 190);
  for(i = 1; i < r + 1; i++) {
    translate(0, -20);
    box(190 - (10 * i), 10, 190 - (10 * i));
    translate(0, -20);
    box(150 - (10 * i), 30, 150 - (10 * i));
  }
  translate(0, -20);
  box(190 - (10 * r * 2), 10, 190 - (10 * r * 2));
  translate(0, -10);
  box(150 - (10 * r * 2), 10, 150 - (10 * r * 2));
  translate(0, -10);
  box(130 - (10 * r * 2), 10, 130 - (10 * r * 2));
  if(useLights === true) {
    lights.forEach((currentLight) => {
      light(currentLight.x, currentLight.y);
    });
  }
}


function mouseClicked() {
  if(useLights === true) {
    lights.push({x: mouseX, y: mouseY});
  }
}