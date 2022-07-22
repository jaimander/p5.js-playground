let pg;
let creativity = 0;
let playfulAttitude = 0;
let flowState = false;
let difficulty = 0;
let attention = 0;
let curiosity = 0;
let practiceTime = 0;
let creativeCodingOutput = 0;
let coding = false;
let serendipity = 0;

let fontRegular, fontItalic, fontSemiBold, fontMono;
let textStartY = 170;
let barStartY = 157;
let barHeight = 15;
let language = 'ES';
let cv;

function setup() {
  cv = createCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth, windowHeight);

  fontRegular = loadFont('assets/ChakraPetch-Regular.ttf');
  fontItalic = loadFont('assets/ChakraPetch-Italic.ttf');
  fontSemiBold = loadFont('assets/ChakraPetch-SemiBold.ttf');
  fontMono = loadFont('assets/IBMPlexMono-Light.ttf');
}

function draw() {
  background(80);
  textFont(fontRegular);

  // textos
  fill(190, 255, 0);
  textSize(60);

  if (language == 'EN') {
    text('The Creative Coding Algorithm', 50, 80);
  }
  if (language == 'ES') {
    text('Algoritmo de la Programación Creativa', 50, 80);
  }

  textSize(20);
  fill(190, 255, 0);
  text('/', width - 150 + 30, 120);
  if (language == 'EN') {
    fill(140);
    text('EN', width - 150, 120);
    fill(190, 255, 0);
    text('ES', width - 150 + 45, 120);
  }
  if (language == 'ES') {
    fill(190, 255, 0);
    text('EN', width - 150, 120);
    fill(140);
    text('ES', width - 150 + 45, 120);
  }

  textSize(30);
  textFont(fontItalic);
  //text('Work in progress', 50, 110);

  textFont(fontRegular);
  textSize(20);
  //fill(0, 255, 255);
  fill(255);
  textAlign(RIGHT);

  if (language == 'EN') {
    text('playfulAttitude', 220, textStartY);
    text('flowState', 220, textStartY + 30);
    text('attention', 220, textStartY + 60);
    text('curiosity', 220, textStartY + 90);
    text('coding', 220, textStartY + 120);
    text('practiceTime', 220, textStartY + 150);
    text('serendipity', 220, textStartY + 180);
    text('creativity', 220, textStartY + 210);
    text('creativeCodingOutput', 220, textStartY + 280);
    textFont(fontSemiBold);
  }

  if (language == 'ES') {
    text('actitudDeJuego', 220, textStartY);
    text('estadoDeFlujo', 220, textStartY + 30);
    text('atención', 220, textStartY + 60);
    text('curiosidad', 220, textStartY + 90);
    text('programar', 220, textStartY + 120);
    text('tiempoDePráctica', 220, textStartY + 150);
    text('serendípia', 220, textStartY + 180);
    text('creatividad', 220, textStartY + 210);
    //textFont(fontSemiBold);
    text('programaciónCreativa', 220, textStartY + 280);
  }

  textAlign(LEFT);
  // valores

  textFont(fontRegular);
  fill(200);
  textAlign(LEFT);
  text(playfulAttitude, 250, textStartY);
  text(flowState, 250, textStartY + 30);
  text(attention, 250, textStartY + 60);
  text(curiosity, 250, textStartY + 90);
  text(coding, 250, textStartY + 120);
  text(practiceTime, 250, textStartY + 150);
  text(serendipity, 250, textStartY + 180);
  text(creativity, 250, textStartY + 210);
  text(creativeCodingOutput, 250, textStartY + 280);

  // creativeCoding
  if (frameCount % 20 == 0) {
    creativeCoding();
  }

  // barras
  noStroke();
  // playfulAttitude
  fill(0, 255, 255);
  rect(360, barStartY, playfulAttitude * 10, barHeight);
  // flowState
  if (flowState == true) {
    fill(0, 255, 255);
  } else {
    fill(50, 50, 50);
  }
  rect(360, barStartY + 30, barHeight, barHeight);
  // attention
  fill(0, 255, 255);
  rect(360, barStartY + 60, attention * 0.1, barHeight);
  // curiosity
  rect(360, barStartY + 90, curiosity * 0.1, barHeight);
  // coding
  if (coding == true) {
    fill(0, 255, 255);
  } else {
    fill(50, 50, 50);
  }
  rect(360, barStartY + 120, barHeight, barHeight);
  // practiceTime
  fill(0, 255, 255);
  rect(360, barStartY + 150, practiceTime * 0.1, barHeight);
  // serendipity
  rect(360, barStartY + 180, serendipity * 10, barHeight);
  // creativity
  rect(360, barStartY + 210, creativity * 0.1, barHeight);
  // creativeCodingOutput
  //fill(255, 100, 0);
  fill(0, 255, 255);
  rect(360, barStartY + 280, creativeCodingOutput * 0.01, barHeight);

  image(pg, 0, 0);

  if (
    (mouseX >= width - 150 &&
      mouseX <= width - 150 + 35 &&
      mouseY >= 100 &&
      mouseY <= 100 + 20) ||
    (mouseX >= width - 150 + 40 &&
      mouseX <= width - 150 + 45 + 35 &&
      mouseY >= 100 &&
      mouseY <= 100 + 20)
  ) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

function creativeCoding() {
  creativeCodingOutput = 0;
  if (coding == true) {
    practiceTime++;
  }
  if (playfulAttitude > 0) {
    flowState = true;
  } else {
    flowState = false;
  }
  if (coding == true && flowState == true) {
    serendipity = int(random(10));
  }
  if (flowState == true) {
    attention++;
    curiosity += int(random(0, 2));
    creativity = int(
      playfulAttitude * (attention + curiosity) * (serendipity + 1) * 0.1
    );
  } else {
    attention = 0;
  }

  creativeCodingOutput = int(creativity * 0.1) * practiceTime * int(coding);
  return creativeCodingOutput;
}

function keyPressed() {
  if (key == 'f' || key == 'F') {
    if (flowState == true) {
      flowState = false;
    } else {
      flowState = true;
    }
  }
  if (key == 'w' || key == 'W') {
    playfulAttitude += 1;
  }
  if (key == 'q' || key == 'Q') {
    if (playfulAttitude > 0) {
      playfulAttitude -= 1;
    }
  }

  if (key == 'p' || key == 'P') {
    if (coding == true) {
      coding = false;
    } else {
      coding = true;
    }
  }
}

function preload() {
  loadFont('assets/ChakraPetch-Regular.ttf');
  loadFont('assets/ChakraPetch-Italic.ttf');
  loadFont('assets/ChakraPetch-SemiBold.ttf');
  loadFont('assets/IBMPlexMono-Light.ttf');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  pg.fill(255, 60, 30);

  if (mouseX >= width - 150 && mouseX <= width - 150 + 35) {
    if (mouseY >= 100 && mouseY <= 100 + 50) {
      language = 'EN';
    }
  }

  if (mouseX >= width - 150 + 40 && mouseX <= width - 150 + 45 + 35) {
    if (mouseY >= 100 && mouseY <= 100 + 50) {
      language = 'ES';
    }
  }

  //pg.ellipse(mouseX, mouseY, 5, 5);
  //pg.text(mouseX + '  ' + mouseY, mouseX, mouseY);
}
