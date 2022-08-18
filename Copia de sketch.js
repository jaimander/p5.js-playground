
function setup() {
  cv = createCanvas(windowWidth, windowHeight);
}

function draw() {
  colorMode(HSB, 255);

  let h = noise(frameCount * 0.01) * 255;
  let g = noise(frameCount * 0.03) * 255;
  //console.log(noise(frameCount*0.1)*255);
  //console.log(h);

  background(h, 100, 200);

  let v = 0;


  rectMode(CENTER);
  stroke(0);
  noFill();
  // rect(width / 2, height / 2, 400, 400);

  if (keyIsPressed) {
    //console.log(key.charCodeAt());

    v = int(key.charCodeAt());

    fill(g, 100, 200);
    textAlign(CENTER, CENTER);
    textSize(200);
    text(v, width / 2, height / 2);
    fill(0);
    textSize(30);
    text(key, width / 2, height / 2 + 300);


    for (let i = width / 2 - 200; i < width / 2 + 200; i += 10) {
      for (let j = height / 2 - 200; j < height / 2 + 200; j += 10) {
        let c = get(i, j);
        //console.log(c);
        noStroke();
        fill(c[0], c[1], c[2], 255);
        if (i > width / 2 - 200 && j > height / 2 - 200) {
          ellipse(i, j, 10, 10);
        }
      }
    }
  }





}
