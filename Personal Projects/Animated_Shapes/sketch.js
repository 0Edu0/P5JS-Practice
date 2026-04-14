let ellipseX = 30;
let ellipseY = 30;
let ellipseSpeedX =  5;
let ellipseSpeedY = 2;
let r = 25;

let rectX = 300;
let rectY = 30;
let rectS = 50;
let rectSpeedX = 3;
let rectSpeedY = 2;

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(0);

    noFill();
    strokeWeight(4);
    stroke(255);

    ellipse(ellipseX, ellipseY, r*2, r*2);

    ellipseX += ellipseSpeedX;
    ellipseY += ellipseSpeedY;
    ellipseSpeedX = constrain(ellipseSpeedX, -10, 10);
    ellipseSpeedY = constrain(ellipseSpeedY, -10, 10);

    if(ellipseX > windowWidth - r || ellipseX < r){
        ellipseSpeedX = -ellipseSpeedX;
    }
    if(ellipseY > windowHeight - r  || ellipseY < r){
        ellipseSpeedY = -ellipseSpeedY;
    }

    rect(rectX, rectY, rectS, rectS);

    rectX += rectSpeedX;
    rectY += rectSpeedY;
    rectSpeedX = constrain(rectSpeedX, -10, 10);
    rectSpeedY = constrain(rectSpeedY, -10, 10);

    if(rectX > windowWidth - rectS || rectX < 0){
        rectSpeedX = -rectSpeedX;
    }
    if(rectY > windowHeight - rectS || rectY < 0){
        rectSpeedY = -rectSpeedY;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}