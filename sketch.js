
function setup() {
  cv = createCanvas(600, 600);
}

function draw() {
  background(100);

  // cuadricula
  stroke(255);
  strokeWeight(0.2);
  
  for (let i = 0; i < width; i += 100) {
    line(i, 0, i, height);
  }
  for (let i = 0; i < height; i += 100) {
    line(0, i, width, i);
  }
  

  noStroke();
  angleMode(DEGREES);

  // cian
  push();
  translate(100,200);
  rotate(-20);
  fill(0, 255, 255);
  rect(0, 0, 100, 80);
  pop();

  /*
    // magenta original
    fill(255, 0, 255);
    rect(200, 200, 100, 100);
  */

  //rotate(10);
  translate(300, 200); 
  rotate(45); 
  fill(255, 0, 255);
  rectMode(CENTER);
  rect(0, 0, 100, 80);

  noFill();
  stroke(255, 0, 255);
  strokeWeight(2);
  rectMode(CORNER);
  //rect(0, 0, 400, 400);

  rotate(-45);
  translate(-300, -200); 
  noStroke();
  fill(255, 255, 0);
  arc(100, 100, 100, 100, 0, 90);
}
