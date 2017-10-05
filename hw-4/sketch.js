function setup() {
//create a canvas
createCanvas( 500, 600 );
}

function draw() {
  //set the backgroung color
  background(135, 173, 237);
  //create a sandbox for the character
  push();
  //move the grid to the center of the canvas.
  translate( 250, 300 );

  //sandbox fot the base
  push();

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
      rect(-120, -40, 5, 200, 10);

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
}
