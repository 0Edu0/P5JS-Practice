let video;
let mode = 0;
let previousPixels = [];

function setup(){
    createCanvas(windowWidth, windowHeight);

    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide();
}

function draw(){
    background(0);

    translate(width, 0);
    scale(-1, 1);
    image(video, 0, 0, width, height);

    loadPixels();

    for (let i = 0; i < pixels.length; i += 4){
        let r = pixels[i];
        let g = pixels[i + 1];
        let b = pixels[i + 2];

        if(mode === 1){
            let avg = (r + g + b) / 3;

            pixels[i] = avg;
            pixels[i + 1] = avg;
            pixels[i + 2] = avg;
        }else if(mode === 2){
            let avg = (r+g+b)/3;
            avg = avg > 127 ? 255 : 0;

            pixels[i] = avg;
            pixels[i + 1] = avg;
            pixels[i + 2] = avg;
        }else if(mode === 3 && previousPixels.length > 0){
            let prevR = previousPixels[i];
            let diff = abs(r - prevR);

            if(diff > 50){
                pixels[i] = random(0, 255);
                pixels[i + 1] = random(0, 255);
                pixels[i + 2] = random(0, 255);
            }
        }
    }
    updatePixels();

    previousPixels = pixels.slice();
    resetMatrix();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
    if(key === '0'){
        mode = 0;
    };
    if(key === '1'){
        mode = 1;
    };
    if(key === '2'){
        mode = 2;
    };
    if(key === '3'){
        mode = 3;
    };
}
