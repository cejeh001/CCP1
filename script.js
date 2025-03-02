let penColor = 'lightblue';
let penSize = 10;

// variables for dragging canvas
let drag = false;
let offsetX = 0;
let offsetY = 0;
let canvasX = 0;
let canvasY = 0;

// variables for drawing mode
let drawingMode = true;

// snowman images
let snowman, snowmanMouthOpen, snowmanChewing, snowmanSpitOut, snowmanHoldingBelly;

function setup() {
  createCanvas(500, 500);
  background(255);
  angleMode(DEGREES);

  // Create a button to toggle drawing and dragging
  let button = createButton('Drawing/Dragging');
  button.position(10, 10);
  button.mousePressed(drawingMode);
}

function draw() {
  if (drawingMode) {
    if (mouseIsPressed) {
      stroke(penColor);
      strokeWeight(penSize);
      line(mouseX - canvasX, mouseY - canvasY, pmouseX - canvasX, pmouseY - canvasY);

      translate(width / 2, height / 2);
      for (let i = 0; i < 360; i += 30) {
        rotate(i);
        line(mouseX - canvasX - width / 2, mouseY - canvasY - height / 2, pmouseX - canvasX - width / 2, pmouseY - canvasY - height / 2);
      }
    }
  } else {
    if (mouseIsPressed) {
      drag = true;
      offsetX = mouseX - canvasX;
      offsetY = mouseY - canvasY;
    }
  }

  background(255); // Clear the canvas with a white background
  translate(canvasX, canvasY);
  fill(255);
  rect(0, 0, 500, 500);
}

function mouseDragged() {
  if (!drawingMode && drag) {
    canvasX = mouseX - offsetX;
    canvasY = mouseY - offsetY;
  }
}

function mouseReleased() {
  if (!drawingMode) {
    drag = false;
  }
}

function toggleMode() {
  drawingMode = !drawingMode;
}