//fluxhype
//Perlin Noise 1D
//Exercise via Daniel Shiffman

// var xoff1 = 0;
// var xoff2 = 10000;

var inc = 0.01;
var start = 0;

function setup() {
    colorMode(HSL);
    createCanvas(400, 400);
}

function draw() {
    background(100);

    stroke(0);
    noFill();

    beginShape();
    var xoff = start;
    for (var x = 0; x < width; x++) {
        stroke(0);
        var n = map(noise(xoff), 0, 1, 0, height);
        var s = map(sin(xoff), -1, 1, -50, 50);
        var y = s + n;


        // var y = map(noise(xoff), 0, 1, 0, height);
        vertex(x, y);
        xoff += 0.02;
    }
    endShape();

    start += inc;

    // noLoop();

    // var x = random(width);

    // var x = map(noise(xoff1), 0, 1, 0, width);
    // var y = map(noise(xoff2), 0, 1, 0, height);
    //
    // xoff1 += 0.02;
    // xoff2 += 0.02;


    // fill(0);
    // ellipse(x, y, 24, 24);
}
