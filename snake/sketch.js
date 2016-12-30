//fluxhype
//Snake
//Exercise via Daniel Shiffman

var s;
var scl = 20;

var food;

function setup() {
    colorMode(HSL);
    frameRate(10);
    createCanvas(600, 600);
    s = new Snake();
    pickLocation();
}

function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(52);

    if (s.eat(food)) {
        pickLocation();
    }
    s.death();
    s.update();
    s.show();



    fill(0);
    rect(food.x, food.y, scl, scl);
    noStroke();
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode == DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode == LEFT_ARROW) {
        s.dir(-1, 0);
    } else if (keyCode == RIGHT_ARROW) {
        s.dir(1, 0);
    }
}
