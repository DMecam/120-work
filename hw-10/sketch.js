//define an empty array
let circle = [];
//define a new variable
let clicks = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(125);
  //set the frame rate
  frameRate(15);

  //push in three new values
  circle.push(0, 0, 60);
}

//define variable
var r = circle[2] * 0.5;

function draw() {
  //draw a group of circles using the array elements
  for( var i = 0; i < 15; i++ ) {
      circle[0] = width * i/10 + r;

      //if the number of clicks is greater than 3, the circles do not have strokes
      if (clicks < 3) {
        noStroke();
        fill(random(256), mouseY, random(256), mouseX);
      }

      //if 3 is greater than the number of clicks, the circles do not have fill
      else {
        noFill();
        stroke(random(256), mouseY, random(256), mouseX);
        strokeWeight(random(6));
      }
      //draws a ellipse using the array elements
      ellipse( random(width), random(height), circle[2] );
    }
  //run the inst function
  inst();
  //define two new variables
  let num1 = random(height);
  let num2 = random(height);
  //complete the array
  randomLine(num1, num2);
  //run the newCursor function
  newCursor();
}

function backgroundChange() {
  //use the number of clicks to determinate the background
  if (clicks == 1) {
    background (5);
  }
  else if (clicks == 0) {
    background (125);
    //draw a group of lines
    for( var j = 0; j < 30; j++ ) {
      strokeWeight(random(10));
      line (random(width), 0, random(width), height, 20);
    }
  }
  else if (clicks == 2) {
    background (random(256), random(256), random(256), random(200));
  }
  else if (clicks == 3) {
    background (mouseX, mouseY, mouseX);
  }
  //run the inst function
  inst();
}

function mousePressed() {

  //run the backgroundChange function
  backgroundChange();
  //update the clicks value
	clicks++;

  //reset the clicks value if it is equal to 4
	if (clicks == 4) clicks = 0;
}

//text
function inst() {
  noStroke();
  fill ('rgb(174, 223, 233)');
  rect( 10, 39, 145, 30, 50);

  fill ( 0 );
  textSize ( 20 );
  text( "Click to change", 15, 60);

}

//draw a line
function randomLine (posY, posY2) {
  strokeWeight(random(6));
  stroke(mouseY, mouseX, mouseY);
  line(0, posY, width, posY2);
}

//new cursor
function newCursor() {
  noCursor();
  stroke(mouseY, mouseY, mouseX);
  strokeWeight(5);
  fill( mouseX, mouseX, mouseY);
  rect( mouseX + 15, mouseY + 15, 30, 30);
}
