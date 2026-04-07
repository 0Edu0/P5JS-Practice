/*
    Map works by assigning a value in a range to be a different value that is equivalent in another specific range. 
    Syntax: map(<<Value to map>>, <<Value's min>>, <<Value's max>>, <<New min>>, <<New max>>)
*/

var r = 0;
var b = 255;
var g = 0;

function setup(){
    createCanvas(600, 400);
}

function draw(){
    r = map(mouseX, 0, 600, 0, 255);
    b = map(mouseX, 0, 600, 255, 0);
    g = map(mouseY, 0, 400, 0, 255);

    background(r, 0, b);

    fill(250, 118, 222);
    ellipse(mouseX, mouseY, 64, 64);
}