let rects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  noFill();
  strokeWeight(4);
  stroke(255);
  ellipse(mouseX, mouseY, 100);

  for(let r of rects){
    rect(r.x, r.y, r.s, r.s);
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}   

function mousePressed(){
    rects.push({
        x: random(0, width),
        y: random(0, height),
        s: 50
    });
}

function keyPressed(){
    rects = [];
}