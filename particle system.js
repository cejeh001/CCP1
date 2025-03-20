// snowflakes array 
let snowflakes = [];

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
        fill("whitesmoke");
        ellipse(flake.x, flake.y, flake.size);
        // increase the y so it goes down
        flake.y += flake.ySpeed;

        // add wind
        flake.x += flake.xSpeed;
    })
}