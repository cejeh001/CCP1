let penColor = 'lightblue';
let penSize = 10;

// snowman images
let snowman, snowmanMouthOpen, snowmanChewing, snowmanSpitOut, snowmanHoldingBelly;

function setup() {
  createCanvas(500, 500);
  background(255);
  angleMode(DEGREES);
}

function draw() {
  if (mouseIsPressed) {
    stroke(penColor);
    strokeWeight(penSize);
    line(mouseX, mouseY, pmouseX, pmouseY);

    translate(width / 2, height / 2);
    for (let i = 0; i < 360; i += 30) {
      rotate(i);
      line(mouseX - width / 2, mouseY - height / 2, pmouseX - width / 2, pmouseY - height / 2);
    }
  }
}