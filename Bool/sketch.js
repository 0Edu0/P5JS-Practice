var on = false;

function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(0);
    
    if(on){
        background(0, 255, 0);
    } else{
        background(0);
    }

    stroke(255);
    strokeWeight(4);
    noFill();

    if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
        fill(255, 0, 200);
    }
    
    rectMode(CENTER);
    rect(width/2, height/2, 100, 100);
}

function mousePressed(){
    if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
        on = !on;
    };
}

//Change the color of the background only when pressed in the rectangle while the mouse is being pressed constantly
    // if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
    //     if(mouseIsPressed){
            
    //         background(0, 255, 0);
    //     }
    // fill(255, 0, 200);
    // }