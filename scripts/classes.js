class flower {
  constructor(xPos, yPos, numLeafs, speed, scalef, ang = 0, angvel = 0.001) {
    // this.xPos = this.xPos +this.rad/2;
    this.pos = createVector(xPos, yPos);
    this.vel = createVector(speed, speed);
    this.numLeafs = numLeafs;
    this.speed = speed * scalef;
    this.scalef = scalef;
    this.lastmouseX = mouseX;
    this.lastmouseY = mouseY;
    this.ang = ang;
    this.angvel = angvel
    //console.log("x: " + this.xPos + " y:" + this.yPos + " v:" +this.speed +" scale:" +this.scalef);
  }
  show() {
    push();
    colorMode("RGB");
    
    fill(0, 159, 90);
    noFill();
    strokeWeight(3);
    stroke("white");
    for (var i = 0; i < this.numLeafs; i++) {
      push();
      translate(this.pos.x, this.pos.y);
      scale(this.scalef);
      rotate(this.ang + radians((i * 360) / this.numLeafs));
      this.ang += this.angvel

      arc(110, -30, 140, 140, radians(30), radians(180 - 30), CHORD);
      arc(110, -30 + 140 / 2, 140, 140, radians(180 + 30), radians(-30), CHORD);
      pop();
    }
    translate(this.pos.x, this.pos.y);
    scale(this.scalef);
    fill("white");
    ellipseMode('CENTER'); // Set ellipseMode to Center
    noStroke();
    ellipse(0, 0, 140);
    //scale(1 / this.scalef);
    pop();
  }

  move() {
    push()
    //let speedY = (mouseY - this.lastmouseY)*0.1;
    this.vel.x += (mouseX - this.lastmouseX) * 0.01*constrain(this.scalef,0.1,1.1);
    this.pos.y -= this.vel.y*0.1//+speedY;
    //this.speedX = (mouseX - width / 2) * this.scalef * .1;
    this.vel.x *= 0.92;
    //speedY*=0.92
    this.pos.x += this.vel.x;
    if (this.pos.x < 0 - this.scalef*350/2) this.pos.x = (windowWidth * 1)+ this.scalef*350/2;
    if (this.pos.x > (windowWidth * 1) + this.scalef*350/2) this.pos.x = 0- this.scalef*350/2;
    if (this.pos.y < 0 - this.scalef*350/2) this.pos.y = (windowHeight * 1 )+ this.scalef*350/2;
    this.lastmouseX = mouseX;
    //print(this.pos.y+ ' ' + this.scalef+ ' '+ height)
    pop()
  }
}

class textreveal {
  constructor(texto, x, y, size = 18) {
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
  updateLocation(newX = this.x, newY = this.y){
    this.x = newX;
    this.y = newY;
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
