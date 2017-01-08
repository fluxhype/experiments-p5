//fluxhype
//Perlin Noise 2D
//Exercise via Daniel Shiffman

var inc = 0.01;

function setup() {
    colorMode(HSL);
    createCanvas(200, 200);
}

function draw() {
    var yoff = 0;
    loadPixels();
    background(100);

    for (var y = 0; y < height; y++) {
        var xoff = 0;
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            var r = noise(xoff, yoff) * 255;
            pixels[index + 0] = r;
            pixels[index + 1] = r;
            pixels[index + 2] = r;
            pixels[index + 3] = 255;

            xoff += inc;
        }
        yoff += inc;
    }
    updatePixels();
}
