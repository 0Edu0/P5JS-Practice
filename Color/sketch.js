function setup() {
    createCanvas(400, 400);
}

function draw() {
    //RGB parameters if 3 are in, if only a number is used, the color is gray-scaled
    background(200);

    rectMode(CENTER);

    fill(0, 0, 255);
    stroke(0, 255, 0);
    rect(200, 150, 150, 150);

    //Fourth value stands to Alpha - Transparency
    fill(255, 0, 0, 150);
    noStroke();
    ellipse(150, 250, 100, 75);

}