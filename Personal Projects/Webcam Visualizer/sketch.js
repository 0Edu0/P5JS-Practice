let video;
let cameraOn = true;

function setup(){
    createCanvas(windowWidth, windowHeight);

    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide();

}

function draw(){
    background(0);

    if(cameraOn){
        translate(width, 0);
        scale(-1, 1);
        image(video, 0, 0, width, height);
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
    if(key === 'c' || key === 'C'){
        cameraOn = !cameraOn;
    }
}