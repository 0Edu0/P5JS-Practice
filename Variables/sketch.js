//Move the ball with the mouse location

/*
function setup(){
    createCanvas(400, 400);
}

function draw(){
    noStroke();
    fill(255, 50);
    ellipse(mouseX, mouseY, 24);
}

function mousePressed(){
    background(0);
}
*/

let circleX;

function setup() {
    createCanvas(windowWidth, windowHeight);
    circleX = 0;
}

function draw() {
    background(0);

    noStroke();
    fill(255);
    ellipse(circleX, 150, 64);

    circleX += 1;
}