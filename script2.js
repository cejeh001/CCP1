// Constants
const MIN_SIDES = 3;
const MAX_SIDES = 12;
const DEFAULT_SIDES = 6;
const MIN_SIZE = 5;
const MAX_SIZE = 20;
const MIN_SPEED = 1;
const MAX_SPEED = 5;
const ROTATION_SPEED = 2;

// Slider variables
let sidesSlider;
let speedSlider;

// Number of snowflakes
let numSnowflakes = 100;

// Array to hold snowflake objects
let snowflakes = [];

// Number of sides of the snowflake
let numSides = DEFAULT_SIDES;

// Speed of the snowflakes
let snowflakeSpeed = MIN_SPEED;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  // Initialize snowflakes
  for (let i = 0; i < numSnowflakes; i++) {
    snowflakes.push(new Snowflake());
  }
  // Create a slider to change the number of sides
  sidesSlider = createSlider(MIN_SIDES, MAX_SIDES, DEFAULT_SIDES);
  sidesSlider.position(10, 10);
  sidesSlider.size(80);
  sidesSlider.input(updateNumSides);
  
  // Create a slider to change the speed of the snowflakes
  speedSlider = createSlider(MIN_SPEED, MAX_SPEED, MIN_SPEED);
  speedSlider.position(10, 40);
  speedSlider.size(80);
  speedSlider.input(updateSnowflakeSpeed);
}

function draw() {
  background(220);
  // Update and display snowflakes
  for (let i = 0; i < snowflakes.length; i++) {
    snowflakes[i].update(snowflakeSpeed);
    snowflakes[i].display(numSides);
  }
}

// Update the number of sides based on the slider value
function updateNumSides() {
  if (sidesSlider) {
    numSides = sidesSlider.value();
  }
}

// Update the speed of the snowflakes based on the slider value
function updateSnowflakeSpeed() {
  if (speedSlider) {
    snowflakeSpeed = speedSlider.value();
  }
}

// Snowflake class
class Snowflake {
  constructor() {
    // Initial position
    this.x = random(width);
    this.y = random(-height);
    // Size
    this.size = random(MIN_SIZE, MAX_SIZE);
    // Angle
    this.angle = random(0, 360);
  }

  update(speed) {
    // Move down
    this.y += speed;
    // If off the bottom, reset to top
    if (this.y > height) {
      this.y = random(-height);
      this.x = random(width);
    }
    // Rotate
    this.angle += ROTATION_SPEED;
  }

  display(numSides) {
    // Draw snowflake
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    noStroke();
    fill(255);
    beginShape();
    for (let i = 0; i < numSides; i++) {
      vertex(this.size * cos(i * 360 / numSides), this.size * sin(i * 360 / numSides));
    }
    endShape(CLOSE);
    pop();
  }
}