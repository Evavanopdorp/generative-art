/* 👇 Start writing your p5.js code here */

function setup() {
  createCanvas(800,600);
  noLoop();
  happyFace(width/2, height/2, 170);
}

function draw() {
  background("BLACK");
  stroke("WHITE");
  var step = 15;
  for (var x=0;x<width;x=x+step) {
  	for (var y=0;y<height;y=y+step) {
    	strokeWeight(5);
      if(random()>0.5) {
        line(x,y,x+step,y+step);
      } 
      else {
      	line(x+step,y,x,y+step);
      }
    }
  }
  if (random()>0.2){
    var myDiv = createDiv('JE HEBT VERLOREN, HELAAS!');
    myDiv.position(100, 100);
    myDiv.style('font-size', '40px');
    myDiv.style('text-align', 'center');
    myDiv.style('color', 'red');
    myDiv.style('font-family', 'Arial');
    myDiv.style('font-style', 'Bold');
  }
  else {
    background("GREEN");
    happyFace(width/2, height/2, 370);
    var myDiv = createDiv('JE HEBT GEWONNEN, GEFELICITEERD!');
    myDiv.position(40, 100);
    myDiv.style('font-size', '40px');
    myDiv.style('text-align', 'center');
    myDiv.style('color', 'green')
    myDiv.style('font-family', 'Arial');
    myDiv.style('font-style', 'Bold');
  }
}

function happyFace (x, y, diam) {
  // Face
  fill(255, 255, 0);
  stroke(0);
  strokeWeight(2);
  ellipse(x, y, diam, diam);
  
  // Smile
  var startAng = .1*PI
  var endAng = .9*PI
  var smileDiam = .6*diam;
  arc(x, y, smileDiam, smileDiam, startAng, endAng);
  
  // Eyes
  var offset = .2*diam;
  var eyeDiam = .1*diam;
  fill(0);
  ellipse(x-offset, y-offset, eyeDiam, eyeDiam);
  ellipse(x+offset, y-offset, eyeDiam, eyeDiam);
}