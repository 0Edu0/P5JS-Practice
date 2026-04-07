function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(0);

    if(mouseX <= 200){
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(300, 200, 100);
    } else if(mouseX <= 400){
        rectMode(CENTER);
        stroke(255);
        strokeWeight(4);
        noFill();
        rect(300, 200, 100, 100);
    } else if(mouseX <= 600){
        stroke(255);
        strokeWeight(4);
        noFill();
        triangle(250, 250, 300, 150, 350, 250);
    }
}