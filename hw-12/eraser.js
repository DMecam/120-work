//define a new class
class Eraser {

  constructor() {
    //set all the values
    this.sizeW = 20;
    this.sizeH = 40;
    this.posX = 30;
    this.posY = 30;
    this.color = 'rgb(19, 162, 232)';

  }

  display() {
    //determinate all the characteristics
    noStroke();
    fill(this.color);
    rect(mouseX, mouseY, this.sizeW, this.sizeH);
  }

  eraserPosition() {
    //check the clicks value and change the object position
    if (cliks == 1) {
      this.posX = mouseX;
      this.posY = mouseY;
    }

    else if (cliks == 2) {
      this.posX = 30;
      this.posY = 30;
    }
  }

  eraserUse() {
    //erase a point if there's contact
    for (let i = points.length - 1; i >= 0; i--) {
        let destroyMe = points[i].mouseCheck();
        if (destroyMe) {
            points.splice(i, 1);
        }
  }
}
}
