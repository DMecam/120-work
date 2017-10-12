function setup() {
//create a canvas
createCanvas( windowWidth, windowHeight );
//set the backgroung color
background(135, 173, 237);
}

//declare the position values
var mPositionX = 0;
var cPositionY = 0;
var cPositionX = 0;
var cPositionX2 = 1000;
var cPositionY2 = 1000;
var angle = 0;

//declare the color values
var redVal = 0;
var greenVal = 0;
var blueVal = 0;

//declare alpha value
var alphaVal = 0;

function draw() {

  //turn the cursor off
  noCursor();

  //new cursor
  noStroke();
  fill( redVal, 228, blueVal);
  ellipse( mouseX, mouseY, 30, 30, alphaVal);

  //sandbox for circle1
  //the angle is controlled by the mouse in circle1, 2 and 3.
  push();
    noStroke();
    fill('rgb(104, 199, 29)');
    rect( windowWidth * 0.75, windowHeight * 0.75, 130 );

    fill( redVal, greenVal, 50 );
    rotate( radians(angle) );
    ellipse( windowWidth * 0.75, windowHeight * 0.75 , 60, 120, alphaVal);

    angle = (mouseX * 0.25) - 20;
  pop();

  //sandbox for circle2
  push();
    translate( windowWidth * 0.75, windowHeight * 0.25);
    rotate( radians(angle) );

    noStroke();
    fill( 255 );
    ellipse ( windowWidth * 0.75, windowHeight * 0.25, 20, 200);

    //circle3
    push();
      noStroke();
      rotate( QUARTER_PI );
      fill( 0 );
      ellipse( 0, 0, 20, 200);
    pop();

  pop();

  //animation lines
  noStroke();
  fill( 50, 215, blueVal );
  ellipse( windowWidth - 30, cPositionY2 * 0.95 , 60);

  noStroke();
  fill( redVal , 54, 238 );
  ellipse( windowWidth * 0.35, cPositionY2 * 0.95 , 70);

  noStroke();
  fill('rgb(105, 6, 44)');
  ellipse( windowWidth * 0.5, cPositionY2, 50);

  noStroke();
  fill( redVal, 17, 155 );
  ellipse( cPositionX * 1.25, cPositionY * 2, 40);

  noStroke();
  fill( 36, greenVal, 139 );
  rect( cPositionX * 2, windowHeight * 0.25, 60, 60);

  noStroke();
  fill('rgb(98, 41, 156)');
  ellipse( cPositionX * 1.25, windowHeight * 0.5, 40);

  noStroke();
  fill('rgb(180, 193, 153)');
  ellipse( windowWidth * 0.75, cPositionY * 2 , 35);

  noStroke();
  fill('rgb(111, 97, 187)');
  ellipse( windowWidth * 0.5, cPositionY * 1.5 , 70);

  noStroke();
  fill('rgb(63, 213, 199)');
  ellipse( 25, cPositionY, 50);

  //text
  fill ('rgb(174, 223, 233)');
  rect( 0, 39, 140, 30, 50);

  fill ( 0 );
  textSize ( 20 );
  text( "Click to reset", 5, 60);

  //frame count
  fill( 0 );
  rect( 0, 0, 215, 30, 20);

  fill ( 255 );
  textSize( 20 );
  text( "frames elapses: " + frameCount, 10, 20 );

  //update the color values
  redVal = redVal + 0.50;
  redVal = redVal % 255;
  greenVal = greenVal + 0.50;
  greenVal = greenVal % 255;
  blueVal = blueVal + 0.50;
  blueVal = blueVal % 255;

  //update the alphaVal
  alphaVal = alphaVal + 0.1;
  alphaVal = alphaVal % 1;

  //update cPositionY and cPositionX every frame
  cPositionY = cPositionY + 1;
  cPositionX = cPositionY + 1;
  cPositionY2 = cPositionY2 - 1;
  cPositionX2 = cPositionX2 - 1;

  //create a sandbox for the monster
  push();
  //move the grid to the center of the canvas.
  translate( mPositionX , windowHeight - 80 );

  //sandbox fot the monster
  push();

    noStroke();
    fill('rgb(135, 173, 237)');
    rect( mPositionX , windowHeight -80 , 500);

    scale(0.30);
    //base of the spines
    fill('rgb(125, 19, 19)');
    noStroke();
    triangle( -30, -125, 0, -175, 30, -125);
    //sandbox for the secondary spines
    push();
      //transformations
      scale(0.9);
      translate( -20, 0 );
      //detail of the main spine
      fill('rgb(125, 19, 19)');
      noStroke();
      triangle( -30, -125, 0, -175, 30, -125 );

      //transalion of the grid
      translate( -75, 80 );
      scale( 1, 1.3);
      //spine no2
      fill('rgb(125, 19, 19)');
      noStroke();
      triangle( -30, -125, 0, -175, 30, -125 );

    pop();

    //details on the spines
    push();
      fill('rgb(190, 43, 43)');
      noStroke();
      triangle( -30, -125, 0, -175, 5, -125);
      pop();

      //sandbox for the secondary spines
     push();
       //trasnformations
       scale(0.9);
       translate( -20, 0 );

       //transalion of the grid
       translate( -75, 80 );
       scale( 1, 1.3);
       //spine no2
       fill('rgb(190, 43, 43)');
       noStroke();
       triangle( -30, -125, 0, -175, 5, -125 );

     pop();

    //base of the head
    fill('rgb(177, 222, 145)');
    noStroke();
    rect( -125, -125, 250, 300, 100, 100, 50, 50);
    //base of the suit
    fill('rgb(107, 46, 14)');
    noStroke();
    rect( -125, 120, 250, 200, 10);

  // sandbox for the eyes
  push();
    //base of eye no1
    fill('rgb(255, 255, 255)');
    noStroke();
    ellipse( 0, 0, 110, 90 );

    //color of eye no1
    fill('rgb(245, 29, 249)');
    noStroke();
    ellipse ( 0, 0, 60 );

    //center of eye no1
    fill('rgb(0, 0, 0)');
    noStroke();
    ellipse ( 0, 0, 30, 60 );

    //sandbox for eye no2
    push();
      //transformations to the grid
      translate ( -75, -50 );
      scale(0.5);

      //base of eye no2
      fill('rgb(255, 255, 255)');
      noStroke();
      ellipse( 0, 0, 110, 90 );

      //color of eye no2
      fill('rgb(245, 29, 249)');
      noStroke();
      ellipse ( 0, 0, 60 );

      //center of eye no2
      fill('rgb(0, 0, 0)');
      noStroke();
      ellipse ( 0, 0, 30, 60 );
    pop();

    //sandbox for eye no3
    push();
      //transformations to the grid
      translate ( 75, -50 );
      scale(0.5);

      //base of eye no3
      fill('rgb(255, 255, 255)');
      noStroke();
      ellipse( 0, 0, 110, 90 );

      //color of eye no3
      fill('rgb(245, 29, 249)');
      noStroke();
      ellipse ( 0, 0, 60 );

      //center of eye no3
      fill('rgb(0, 0, 0)');
      noStroke();
      ellipse ( 0, 0, 30, 60 );
    pop();

  //sandbox for the mouth
  push();
    //tranlate the grid for the mouth
    translate(0, 110);

    //base of the mouth
    fill('rgb(9, 16, 80)');
    noStroke();
    arc( 0, 0, 100, 100, PI, 0);
  pop();

  //tonge
  push();
    translate( 0, 100 );

    //shape of the mouth
    fill('rgb(36, 26, 194)');
    noStroke();
    arc( 0, 5, 50, 50, PI, 0);
  pop();

    //teeth
    translate( 0, 10);
    //shape of the teeth
    fill('255');
    noStroke();
    triangle(-9, 50, 0, 65, 9, 50);

    //sandbox for details
    push();
      //flip the grid
      scale( 1, -1 );
      translate( 0, -150);

      //details
      push();
        translate( -30, 0 );
        fill('255');
        noStroke();
        triangle(-9, 50, 0, 65, 9, 50);
      pop();

      push();
        translate( 30, 0 );
        fill('255');
        noStroke();
        triangle(-9, 50, 0, 65, 9, 50);
      pop();

     pop();

     //clothes
     push();
       translate( 0, 120 );

       fill('rgb(156, 94, 22)');
       noStroke();
       rect( -20, 20, 40, 40, 10);

       noStroke();
       rect( -10, 20, 20, 60, 10);

       //light
       fill('rgb(200, 146, 73)');
       noStroke();
       rect( -20, 20, 30, 30, 10);

      pop();
    pop();

    //arms
    push();
      translate(0, 170);

      //light
      fill('rgb(149, 75, 21)');
      rect(-120, -40, 5, 180, 10);

      //arm no1
      push();
      translate( -140, -80 );

      noFill();
      stroke('rgb(177, 222, 145)');
      strokeWeight(15);
      arc( 0, 0, 150, 200, HALF_PI, PI);

      //arm no2
      scale( -1, 1 );
      translate( -270, 0 );

      noFill();
      stroke('rgb(177, 222, 145)');
      strokeWeight(15);
      arc( 0, 0, 150, 200, HALF_PI, PI);

      pop();

      //sleeves
      fill('rgb(84, 46, 10)');
      rect( 110, 0, 30, 50, 10);

      fill('rgb(84, 46, 10)');
      rect( -140, 0, 30, 50, 10);

      //sleeves's light
      fill('rgb(120, 62, 30)');
      rect( -135, 7, 5, 35, 10);

    pop();
  pop();

mPositionX = mPositionX + 2;
}

//reset the background
function mousePressed() {

background(135, 173, 237);

}
