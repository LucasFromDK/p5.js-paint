//Todo List:
//Button to Open Keybind Menu window.alert

//Function Values
let lineWidth = 20;
let rColorR = 100;
let rColorG = 100;
let rColorB = 100;
let rAlpha = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  button = createButton('Keybinds');
  button.position(windowWidth - 71, 21);
  button.mousePressed(keybinds);
}

function keybinds() {
  fill(0, 0, 0)
  text("1 = Red, 2 = Green, 3 = Blue, 4 = Yellow, 5 = Purple, 6 = Neon Purple, 7 = Black, DELETE = Clear Canvas", 20, 32);
  text("BACKSPACE = Toggle Eraser Arrow Up = Increase Size, Arrow Down = Decrease Size", 21, 42);
  //Glitches Canvas
  //window.alert("1 = Red, 2 = Green, 3 = Blue, 4 = Yellow, 5 = Purple, 6 = Neon Purple, 7 = Black, DELETE = Clear Canvas, BACKSPACE = Toggle Eraser Arrow Up = Increase Size, Arrow Down = Decrease Size")
}

function draw() {
  strokeWeight(2);
  stroke(0, 0, 0);
  fill(0, 255, 255);
  rect(0, 0, windowWidth, 20);
  fill(0, 0, 0);
  noStroke();
  text("p5.js Paint 🎨 | By: @LucasFromDK", 1, 15);
  text("✏️Thickness: " + lineWidth, 210, 15);
  text("❌", windowWidth - 20, 15);
  //Line + Color Preview, Stroke Gives Smoother Edge
  stroke(rColorR, rColorG, rColorB, rAlpha);
  fill(rColorR, rColorG, rColorB, rAlpha);
  circle(11, 32, 15);
  noStroke();
  if (mouseIsPressed === true) {
    strokeWeight(lineWidth);
    stroke(rColorR, rColorG, rColorB, rAlpha);
    line(mouseX, mouseY, pmouseX, pmouseY);
    noStroke();
  }
}

//Keybind Manager
function keyPressed() {
  if (keyCode === DELETE) {
    background(255);
    console.log("Cleared Canvas!");
  } else if (keyCode === 49) {
    rColorR = 255;
    rColorG = 0;
    rColorB = 0;
    console.log("Changed Color!");
  } else if (keyCode === 50) {
    rColorR = 0;
    rColorG = 255;
    rColorB = 0;
    console.log("Changed Color!");
  } else if (keyCode === 51) {
    rColorR = 0;
    rColorG = 0;
    rColorB = 255;
    console.log("Changed Color!");
  } else if (keyCode === 52) {
    rColorR = 255;
    rColorG = 255;
    rColorB = 0;
    console.log("Changed Color!");
  } else if (keyCode === 53) {
    rColorR = 109;
    rColorG = 34;
    rColorB = 199;
    console.log("Changed Color!");
  } else if (keyCode === 54) {
    rColorR = 109;
    rColorG = 34;
    rColorB = 255;
    console.log("Changed Color!");
  } else if (keyCode === 55) {
    rColorR = 0;
    rColorG = 0;
    rColorB = 0;
    console.log("Changed Color!");
  } else if (keyCode === UP_ARROW) {
    lineWidth = lineWidth + 10;
    console.log("Changed Size By +10!");
    console.log(lineWidth);
  } else if (keyCode === DOWN_ARROW) {
    lineWidth = lineWidth - 10;
    console.log("Changed Size By -10!");
    console.log(lineWidth);
  } else if (keyCode === 08) {
    rColorR = 255;
    rColorG = 255;
    rColorB = 255;
    console.log("Toggled Eraser!");
  }
}
console.log("Program Loaded!");

console.log(
  "Keybinds: 1 = Red, 2 = Green, 3 = Blue, 4 = Yellow, 5 = Purple, 6 = Neon Purple, 7 = Black, BACKSPACE = Toggle Eraser Arrow Up = Increase Size, Arrow Down = Decrease Size, DELETE = Clear Canvas"
);