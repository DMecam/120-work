//Define global variables
var c1Color = 0;
var colR = 0;
var colG = 255;
var colB = 0;
var posX;
var posY;
var maxPos = 1;
//var cir2Size;

//declare alpha value
var alphaVal = 0;

//define a circle variable
// instantiate the variable as an object
var cir3 ={};

//assign qualities to the object
cir3.size = 50;

var cir4 = {
  x: 300,
  y: 150
};

var col = {
  r: 255,
  g: 0,
  b: 255
};

//declare numerator
var numerator = 0;

function setup () {
  //create a canvas
  createCanvas( windowWidth, windowHeight );
  //set the background color
  background ( 'rgb(73, 241, 176)' );

  //initial position
  posX = width * 0.5;
  posY = height * 0.5;
}

function draw () {
  //translate ( width * 0.5, height * 0.5 );
  //the color depens on mouseX
  c1Color = map ( mouseX, 0, width, 0, 255 );
  fill ( c1Color );
  //create a circle
  ellipse ( width * 0.25, height * 0.25, 100 );

colR = map ( mouseX, 0, width, 0, 255 );
colG = map ( mouseX, 0, width, 255, 0 );
colB = map ( mouseY, 0, height, 0, 255 );

fill ( colR, colG, colB, 100 );
noStroke ();

ellipse ( posX, posY, 40);

//random position
posX += floor( random( -maxPos, maxPos + 1));
posY += floor( random( -maxPos, maxPos + 1));

noFill();
stroke( random( 256 ) );
var result = numerator % 6;
strokeWeight( result );

var cir2Size = random( 15, width - 15 );
ellipse ( width / 7, height / 2, cir2Size );

//turn the cursor off
noCursor();

//new cursor
noStroke();
fill( colR, colG, colB);
ellipse( mouseX, mouseY, 30, 30, alphaVal);

//random circle
col.r = random ( 50, 200 );
col.g = 0;
col.b = random ( 75, 255 );
cir4.x = random( 0, width );
cir4.y = random( 0, height );
noFill();
//calculate the result
var result = numerator % 6;
strokeWeight( result );
stroke( col.r, col.g, col.b, 150 );
ellipse( cir4.x, cir4.y, 24, 24);

//text
noStroke();
fill ('rgb(174, 223, 233)');
rect( 10, 39, 140, 30, 50);

fill ( 0 );
textSize ( 20 );
text( "Click to reset", 15, 60);

var firstWall = 100;
var secondWall = height - 100;
var limitMouse = constrain( mouseY, firstWall, secondWall );

//the ball
noStroke();
fill( random(256), random(256), random(256));
ellipse( width * 0.85, limitMouse, 50, 50);

//update the alphaVal
alphaVal = alphaVal + 0.1;
alphaVal = alphaVal % 1;

//update the numerator
numerator = numerator +1;

}

//reset the background
function mousePressed() {

background( random(256), random(256), random(256) );

}
