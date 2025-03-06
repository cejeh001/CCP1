let penColor = 'lightblue';
let penSize = 10;

//canvas variable
let canvas = null;

//offset to compensate for the change of origin
let offsetX = 0;
let offsetY = 0;

// snowman images
let snowman, snowmanMouthOpen, snowmanChewing, snowmanSpitOut, snowmanHoldingBelly;

// mouse mode
let drawing = false;

//canvas body variable
const canvasBody = document.querySelector('.canvas-body');

function setup() {
  canvas = createCanvas(500, 500);
  // parent it to div in HTML
  canvas.parent('canvas');

  background(255);
  angleMode(DEGREES);
}

function draw() {
  if (mouseIsPressed) {
    if (drawing) {
      stroke(penColor); 
      strokeWeight(penSize);
      line(mouseX, mouseY, pmouseX, pmouseY);

      translate(width / 2, height / 2);
      for (let i = 0; i < 360; i += 30) {
        rotate(i);
        line(mouseX - width / 2, mouseY - height / 2, pmouseX - width / 2, pmouseY - height / 2);
      }


    }

    else {

      //print mouse and offset coordinates
      console.log("mouse", mouseX, mouseY, "offset", offsetX, offsetY);

      offsetX = mouseX;
      offsetY = mouseY;

      //event listener for mouse position
      canvasBody.style.top = `${offsetY}px`;
      canvasBody.style.left = `${offsetX}px`;
    }
  }
}

// store snowflake image as texture
// put into particle system