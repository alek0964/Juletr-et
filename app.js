console.log("Js called");
var setup = function(){
    push();
    // base
    var width = 800;
    var height = 1000;
    var xMid = width / 2;
    var yMid = height / 2;
    createCanvas(width, height);
    drawBackground(width, height);
    drawTree(xMid, yMid + 50);
    drawGodJul(xMid, yMid + 50);

    // examples
    drawJulekugle(xMid - 150, yMid + 170, 255, 132, 12, 200);
    drawJulekugle(xMid - -150, yMid + 300, 155, 11, 42, 200);
    drawJulekugle(xMid - 150, yMid + 300, 250, 42, 0, 200);
    drawJulekugle(xMid - 0, yMid + 250, 11, 250, 0, 200);
    drawJulekugle(xMid + 150, yMid + 170, 0, 0, 255, 200);

    drawDannebrog(xMid + 50, yMid - 200);
    drawDannebrog(xMid + 150, yMid - 200);
    drawDannebrog(xMid + 275, yMid - 200);
    drawDannebrog(xMid - 50, yMid - 200);
    drawDannebrog(xMid - 150, yMid - 200);
    drawDannebrog(xMid - 275, yMid - 200);

    // call you own functions here
    drawTemplate(260, 780);
    pop();
};

var drawTree = function (centerX, centerY) {
    push();

    // stem
    fill(150, 100, 50);
    rect(centerX - 25, centerY + 275, 50, 75);

    // leaves
    var counter = 0;
    while (counter < 5){
        drawLevel(centerX, centerY, counter);
        counter++;
    } 

    pop();
};

var drawLevel = function(centerX, centerY, level) {
    push()
    fill(0, 153, 0);
    var slimSize = 20 * level;
    var baseWidth = 600;
    var baseHeight = 0.5 * baseWidth;
    var horizontalSpace = 80;
    var baseY = centerY + 280 - level * horizontalSpace;
    const halfWidth = baseWidth / 2 - slimSize;
    triangle(centerX - halfWidth, baseY, centerX, baseY - baseHeight, centerX + halfWidth, baseY);
    pop()
};

/**
 * Should draw a background the tree
 */
var drawBackground = function (varX, varY) {
    push();
    var height = 1;
    var width = 1;
    fill(204, 102, 0);
    rect(0, 0,varX,varY);
    pop();
};

var drawGodJul = function (centerX, centerY) {
    push();
    textSize(45);
    fill(255, 255, 0)
    text("God Jul VG", centerX - 110, centerY);
    pop();
};

var drawDannebrog = function (centerX, centerY) {
    push();
    var height = 56;
    var width = 75;
    fill(255, 0, 0);
    rect(centerX - width / 2, centerY - height / 2, width, height);
    noStroke();
    fill(255);
    rect(centerX - width / 2, centerY - 1 / 14 * height, width, height / 7);
    rect(centerX - width / 2 + 3 * height / 7, centerY - height / 2, height / 7, height);
    pop();
};


var drawJulekugle = function(centerX, centerY, farve1, farve2, farve3, opacitet) {
    push();
    fill(255, 0, 255);
    rect(centerX - 11, centerY - 60, 20, 30);
    fill(farve1, farve2, farve3, opacitet);
    ellipse(centerX, centerY, 75, 75);
    fill(255, 255, 255)
    ellipse(centerX, centerY, 25, 25)
    pop();
};

/**
 * Make a draw function here
 * It should be positioned to the parameters
 * Should contain at least one loop and one if statement
 * @param {number} centerX
 * @param {number} centerY
 */
var drawTemplate = function(centerX, centerY) {
    push();
    // You decorations
    pop();
};

console.log("JS finished.")

