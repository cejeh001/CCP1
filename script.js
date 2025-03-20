let penColor = 'lightblue';
let penSize = 10;

//canvas variable
let canvas = null;

//offset to compensate for the change of origin
let offsetX = 0;
let offsetY = 0;

// snowman images
let snowman, snowmanMouthOpen, snowmanChewing, snowmanSpitOut, snowmanHoldingBelly;

// lines array
let lines = [];


// mouse mode
// let drawing = false;


//canvas body variable
// const canvasBody = document.querySelector('.canvas-body');

function setup() {
  canvas = createCanvas(500, 500);
  // parent it to div in HTML
  // canvas.parent('canvas');

  background(255);
  angleMode(DEGREES);
}

function getSnowflakeInfo(){
  return lines;
}

function draw() {
  if (mouseIsPressed) {
    

    // line properties
    let drawnLine = {
      x1: pmouseX,
      y1: pmouseY,
      x2: mouseX,
      y2: mouseY
    };

    // add to lines array
    lines.push(drawnLine);
    // draw line
    stroke(penColor); 
    strokeWeight(penSize);
    line(mouseX, mouseY, pmouseX, pmouseY);

    translate(width / 2, height / 2);
    for (let i = 0; i < 360; i += 30) {
      rotate(i);
      line(mouseX - width / 2, mouseY - height / 2, pmouseX - width / 2, pmouseY - height / 2);
    }
  }

  let snowflakeInfo = getSnowflakeInfo();
  console.log(snowflakeInfo); //print the array of lines

}


// store snowflake image as texture
// put into particle system

// particle system

// make class for lines
// decide myline coordinates
// if mouse is pressed, add to mylines
// add to count (how many times the mouse has been clicked which shows the number of lines)
// if the count is a not multiple of 2
// make global variables for x1 and y1 and make them mousex and mouse y
// if the count is a multiple of 2
// make the global variables for x2 and y2 and make them mousex and mousey
// 