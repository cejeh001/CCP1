// snowflakes array 
let snowflakes = [];
let snowflake;

function preload(){
    snowflake = loadImage("/images/snowflake.png");

    // loop for adding snowflakes
    for (i = 0; i < 50; i++){
        addSnowflake();
    }
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
}

function draw(){
    drawSnowflake();
}

function addSnowflake(){

    // add snowflake to array
    snowflakes.push({
        xSpeed: random(-0.7, 0.3),
        ySpeed: random(1.7, 3.5),
        size: random(5, 15),
    })
}

function drawSnowflake(){
    snowflakes. forEach(flake => {
        fill("black");
        ellipse(flake.x, flake.y, flake.size);

        loadImage("/images/snowflake.png");
         
        // increase the y so it goes down
        flake.y += flake.ySpeed;

        // add wind
        flake.x += flake.xSpeed;
    })
}