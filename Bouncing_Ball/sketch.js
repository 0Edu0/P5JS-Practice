let x = 0;
let speedX = 2;

function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(0);

    stroke(255);
    strokeWeight(2);
    noFill();
    ellipse(x, 200, 100);

    if(x > width || x < 0) {
        speedX = speedX * -1;
    }

    x += speedX;
}