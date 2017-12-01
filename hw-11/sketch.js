//declare the variables
let cars = [];
let num_of_cars = 300;
let bg_color;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg_color = (125);

//push the cars
    for (let i = 0; i < num_of_cars; i++) {
        cars.push( new Car() );
    }
}

function draw() {
    background(bg_color);

//draw the cars
    for (var i = 0; i < cars.length; i++) {
        cars[i].frame();
    }
}


//create the class car;
class Car {

    //setts up all properties for Car
    constructor() {
        this.locX = random(width);
        this.locY = random(height);
        this.carColor = color(random(255), random(255), random(255));
        this.sizeW = random(20, 50);
        this.sizeH = random(20, 50);
        this.wheelSize = random(10, 15);
        this.moveX = random(-5, 5);
        this.rect3Size = random(5, 10);
        this.rect3Color = color(random(255), random(255), random(255));
    }

    //update the car each frame
    frame() {
        this.changeColor();
        this.display();
        this.move();
    }

    //all the elements of the car
    display() {

        push();

          translate(this.locX, this.locY);
          fill(this.carColor);
          noStroke();

          //main rectange
          rect(0, 0, this.sizeW, this.sizeH);

          //second rectangle
          rect(0 - this.sizeW * 0.5, 0 + this.sizeH - this.sizeH * 0.5, this.sizeW * 2, this.sizeH * 0.5);

          //upper light
          fill(this.rect3Color);
          rect((0 + this.sizeW * 0.5) - this.rect3Size * 0.5, 0 - this.rect3Size, this.rect3Size, this.rect3Size);

          //wheels
          fill(0);
          ellipse( 0 - this.sizeW * 0.25, this.sizeH, this.wheelSize);
          ellipse(this.sizeW * 1.25, this.sizeH, this.wheelSize);

        pop();
    }

  //set the movement of the car
  move() {
    this.locX += this.moveX;

    //if the car x location is greater or equal to the width, chages the this.moveX value
    if (this.locX >= width) {
      this.moveX = -this.moveX;
    }

    else if (this.locX <= 0) {
      this.moveX = -this.moveX;
    }
  }

  //change the color of the upper light if the car location value is lower than the half of the width
  changeColor() {


      if (this.locX <= width * 0.5) {
        this.rect3Color = color(random(255), random(255), random(255));
      }
  }

}
