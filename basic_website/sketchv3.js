/* 👇 Start writing your p5.js code here */


function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
  strokeCap(CORNER);
  Stroke(255);

  


}

function draw() {
  background(0, 40,65);
 
  for(int r=0; r<180; r+=20 )
    line(r, 0, 0, r);
      
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}