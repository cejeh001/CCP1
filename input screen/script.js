let penColor = 'lightblue';
let penSize = 10;

//canvas variable
let canvas = null;

//offset to compensate for the change of origin
let offsetX = 0;
let offsetY = 0;

// snowflakes array
let snowflakes = [];


// mouse mode
// let drawing = false;


//canvas body variable
// const canvasBody = document.querySelector('.canvas-body');

function setup() {
  canvas = createCanvas(500, 500);
  // parent it to div in HTML
  // canvas.parent('canvas');

  // done button underneath
  let doneButton = createButton('Snow');
  doneButton.position(250, 510);

  // if button pressed, save drawing as png
  doneButton.mousePressed(saveDrawing);

  // add snowflakes to aarray
  for (let i = 0; i < 120; i++){
    snowflakes.push(new Snowflake());
  }

  background(255);
  angleMode(DEGREES);
}

// function getSnowflakeInfo(){
//   return lines;
// }

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

  // let snowflakeInfo = getSnowflakeInfo();
  // console.log(snowflakeInfo); //print the array of lines

}

// save drawing function
function saveDrawing(){
  save("snowflake.png");
}

// snowflake function class thing
class Snowflake{
  // consturctor
  constructor(){

    // positions
    this.posX = 0;
    this.posY = random(-height, 0);

    // angle 
    this.initialAngle = random(0, 360);

    // size
    this.size = random(2, 5);

    // size
    this.radius = sqrt(random(pow(width / 2, 2)));

    // colour
    this.color = color(random(200, 256), random(200, 256), random(200, 256));
  }


  // methods
  fall(time){
    // define angular speed
    let angularSpeed = 35;

    let angle = this.initialAngle + angularSpeed * time;

    // x position follows a sine wave
    this.posX = width / 2 + this.radius * sin(angle);

    // Different size snowflakes fall at different y speeds
    let ySpeed = 8 / this.size;
    this.posY += ySpeed;

    // When snowflake reaches the bottom, move it to the top
    if (this.posY > height) {
      this.posY = -50;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.posX, this.posY, this.size);
  }
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