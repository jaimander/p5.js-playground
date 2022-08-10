
function setup() {
  cv = createCanvas(windowWidth, windowHeight);
}

function draw() {
 colorMode(HSB, 255);
 
  let h = noise(frameCount*0.01)*255;
 //console.log(noise(frameCount*0.1)*255);
 //console.log(h);

 background(h, 100, 200);
 
}
