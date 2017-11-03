//define the variable clicks
var clicks = 4;

//setup
function setup() {
	createCanvas(windowWidth, windowHeight);
}

//define variables
let pos_x = 0;
let pos_y = 0;
let d = 60;
let r = d/2;


function draw() {
  //set the background
	background(125);
  //define variable quanty
	var quanty = map(mouseY, 0, height, 20, 70);

//if 1 click
	if (clicks == 1) {
    //change the background
    background(200);

    //text
    noStroke();
    fill ('rgb(174, 223, 233)');
    rect( 10, 39, 145, 30, 50);

    fill ( 0 );
    textSize ( 20 );
    text( "Click to change", 15, 60);

		// interactive circle line
		for( var i=0; i < 15; i++ ) {
		    pos_x = width * i/10 + r;
        noStroke();
        fill(pos_x, mouseY, pos_y, mouseX);
        ellipse( pos_x, mouseY, d );
		}
	}

  //if 2 clicks
	else if (clicks == 2) {
    //change the background
    background(125);

    //text
    noStroke();
    fill ('rgb(174, 223, 233)');
    rect( 10, 39, 145, 30, 50);

    fill ( 0 );
    textSize ( 20 );
    text( "Click to change", 15, 60);

		// circle lines
    fill(pos_x, mouseY, pos_y, mouseX);
		let positionS = 0;
    for (var x = 20; x <= width-20; x += quanty) {
      ellipse (x, positionS, 20, 20);
      positionS = positionS + 30;
      if (positionS >= height) {
        positionS = 0;
      }
    }
	}

  //if 3 clicks
  else if (clicks == 3) {
    //change the background
    background(5);

    //text
    noStroke();
    fill ('rgb(174, 223, 233)');
    rect( 10, 39, 145, 30, 50);

    fill ( 0 );
    textSize ( 20 );
    text( "Click to change", 15, 60);

		// Circles
		for (var x = 20; x <= width-20; x += quanty) {
			for (var y = 20; y <= height-20; y+= quanty) {
        noStroke();
        fill(random(256), random(256), 127, 175);
				ellipse(x, y, 30, 30);
			}
		}
	}

  //if 4 clicks
  else if (clicks == 4) {
    //change the background
    background(pos_y, mouseY, mouseX);

    //text
    noStroke();
    fill ('rgb(174, 223, 233)');
    rect( 10, 39, 145, 30, 50);

    fill ( 0 );
    textSize ( 20 );
    text( "Click to change", 15, 60);

		// line draw
		for (var x = 50; x < width-50; x += quanty) {
			for (var y = 50; y < height-50; y+= quanty) {
				for (var i = 0; i < 16; i+=4) {
          stroke(20);
          strokeWeight(1);
					line(mouseX, x, mouseY, y );
				}
        noFill();
        stroke(mouseY);
				rect(x, y, 30, 30);
			}
		}
	}

  //update the pos_y value
  pos_y++;
    if (pos_y > height) {
        pos_y = 0;
    }

}

function mousePressed() {
  //update the clicks value
	clicks++;

  //reset the clicks value if it greater than 4
	if (clicks > 4) clicks = 1;
}
