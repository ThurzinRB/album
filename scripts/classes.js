class flower {
  constructor(xPos, yPos, rad, numLeafs, speed, scalef) {
    // this.xPos = this.xPos +this.rad/2;
    this.rad = rad;
    this.xPos = xPos;
    this.yPos = yPos;
    this.numLeafs = numLeafs;
    this.speed = speed * scalef;
    this.speedX=this.speed;
    this.scalef = scalef;
    //console.log("x: " + this.xPos + " y:" + this.yPos + " v:" +this.speed +" scale:" +this.scalef);
  }
  show() {
    push();
    colorMode("RGB");
    scale(this.scalef);
    fill(0, 159, 90);
    noFill();
    strokeWeight(3);
    stroke("white");
    for (var i = 0; i < this.numLeafs; i++) {
      push();
      translate(this.xPos, this.yPos);
      rotate(this.yPos * 0.01 + radians((i * 360) / this.numLeafs));
      arc(110, -30, 140, 140, radians(30), radians(180 - 30), CHORD);
      arc(110, -30 + 140 / 2, 140, 140, radians(180 + 30), radians(-30), CHORD);
      pop();
    }
    fill("white");
    ellipseMode('CENTER'); // Set ellipseMode to Center
    noStroke();
    ellipse(this.xPos, this.yPos, 140);
    //scale(1 / this.scalef);
    pop();
  }

  move() {
    this.yPos -= this.speed;
    this.speedX = (mouseX - width / 2) * this.scalef * .1;
    //this.speedX*=0.9
    this.xPos += this.speedX;
    if (this.xPos < 0 - 2 * this.rad)
      this.xPos = (windowWidth * 1) / this.scalef;
    if (this.xPos > (windowWidth * 1) / this.scalef) this.xPos = 0;
    if (this.yPos < 0 - 2 * this.rad)
      this.yPos = (windowHeight * 1) / this.scalef;
    lastmousex = mouseX;
  }
}

class textreveal {
  constructor(texto, x, y,size = 18) {
    push()
    this.sourceText = texto;
    this.x = x;
    this.y = y;
    this.size = size;
    color("white");
    this.reveal = 0;
    pop()
  }
  show() {
    push();
    textSize(this.size);
    if (this.reveal < this.sourceText.length) this.reveal += 0.5;
    text(this.sourceText.substring(0, this.reveal), this.x, this.y);
    pop();
  }
  unshow() {
    push();
    textSize(this.size);
    if (this.reveal > 0) this.reveal -= 0.5;
    text(this.sourceText.substring(0, this.reveal), this.x, this.y);
    pop();
  }
}
/*
let reveal = 0
function showtext(texto, x, y, autov){
    
    if (luz == true && reveal < sourceText.length) reveal += .5;
    if (luz == false && reveal > 0) reveal -= .5;
    if (auto == true){
        text(sourceText.substring(0, reveal), x, y);
    }
    else{
        let offset = map(mouseY, height, height/2, 0, sourceText.length);
        text(sourceText.substring(0, offset), x, y);
    }
}
*/
