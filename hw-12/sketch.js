//define the variables
let points = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    //define b
    let b = new Point(width / 2, height / 2, 10);
    //push the point
    points.push(b);
    pointTimer();
}

function draw() {
    background(0);
    //draws several points and the different methods
    for (let i = 0; i < points.length; i++) {
        points[i].move();
        points[i].show();
        points[i].pointCheck(points, i);
    }
}

function pointTimer() {
  //set the time for each point to appear
    let b = new Point(random(width), random(height), random(20));
    points.push(b);
    // call a this function every 1000 miliseconds
    setTimeout(pointTimer, random(1000));
}


function mousePressed() {
  //if the mouse is pressed in one poit, it will be erased
  for (let i = points.length - 1; i >= 0; i--) {
      let destroyMe = points[i].mouseCheck();
      if (destroyMe) {
          points.splice(i, 1);
      }
    }

}
