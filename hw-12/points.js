//define a new class
class Point {
    //define all the values of the new object
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.moveX = random(1, 3);
        this.moveY = random(1, 3);
        this.color = 256;
    }

    move() {
      //declare the movement of the new object
      this.x += this.moveX;
      this.y += this.moveY;

      //if the point location is greater or equal to the width, chages the movement value
      if (this.x >= width) {
        this.moveX = -this.moveX;
      }

      else if (this.x <= 0) {
        this.moveX = -this.moveX;
      }

      if (this.y >= height) {
        this.moveY = -this.moveY;
      }

      else if (this.y <= 0) {
        this.moveY = -this.moveY;
      }

    }

    pointCheck( otherPoints, myId) {

      // check the point
        for (let n = 0; n < otherPoints.length; n++) {
            if (n != myId) {
                let d = dist(this.x, this.y, otherPoints[n].x, otherPoints[n].y);
                let combinedR = this.r + otherPoints[n].r;

                if (d <= combinedR) {

                    // flip the color
                    if( this.color == 256) {
                        this.color = 75;
                    } else {
                        this.color = 256;
                    }
                }
            }
        }
    }

    show() {
      //define the characterictic of the object
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.r * 2);
    }

    // check the mouse position
    mouseCheck() {
        // distance between the mouse and the object center
        let d = dist(this.x, this.y, mouseX, mouseY);
        //check if the mouse is inside the point
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }
}
