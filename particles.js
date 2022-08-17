let canvas;
let context;

let fpsInterval = 1000 / 30; // the denominator is frames-per-second
let now;
let then = Date.now();

let x = 250;
let y = 150;
let size = 10;
let xChange = randint(-10, 10);
let yChange = randint(-10, 10);

document.addEventListener("DOMContentLoaded", init, false);

function init() {
    // it finds canvas
    canvas = document.querySelector("canvas");
    // context is the artist
    context = canvas.getContext("2d");  

    draw();
}

function draw() {
    window.requestAnimationFrame(draw);

    // to slow down the fps of animation
    let now = Date.now();
    let elapsed = now - then;
    if (elapsed <= fpsInterval) {
        return;
    } 
    then = now - (elapsed % fpsInterval);

    //clear the canvas each time
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "yellow";
    // across graph (x), down graph (y), width, height
    context.fillRect(x, y, size, size);
    // xChange = randint(-10, 10);
    // yChange = randint(-10, 10);
    x = x + xChange;
    y = y + yChange;
    
    if (x < 0) {
        xChange = xChange * -1;
        // xChange = xChange * 0.9;
        // yChange = yChange * 0.9;
    } else if (x + size >= canvas.width) {
        xChange = xChange * -1;
        // xChange = xChange * 0.9;
        // yChange = yChange * 0.9;
    } 
    if (y < 0) {
        yChange = yChange * -1;
        // xChange = xChange * 0.9;
        // yChange = yChange * 0.9;
    } else if (y + size >= canvas.height) {
        yChange = yChange * -1;
        // xChange = xChange * 0.9;
        // yChange = yChange * 0.9;
    } 
    // size = size * 0.9;
}

function randint(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

