class flower {
  constructor(
    xPos,
    yPos,
    numLeafs = 11,
    speed,
    scalef,
    ang = 0,
    angvel = 0.001
  ) {
    // this.xPos = this.xPos +this.rad/2;
    this.pos = createVector(xPos, yPos);
    this.vel = createVector(speed, speed);
    this.numLeafs = numLeafs;
    this.speed = speed * scalef;
    this.scalef = scalef;
    this.lastmouseX = mouseX;
    this.lastmouseY = mouseY;
    this.ang = ang;
    this.angvel = angvel;
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
      this.ang += this.angvel;

      arc(110, -30, 140, 140, radians(30), radians(180 - 30), CHORD);
      arc(110, -30 + 140 / 2, 140, 140, radians(180 + 30), radians(-30), CHORD);
      pop();
    }
    translate(this.pos.x, this.pos.y);
    scale(this.scalef);
    fill("white");
    ellipseMode("CENTER"); // Set ellipseMode to Center
    noStroke();
    ellipse(0, 0, 140);
    //scale(1 / this.scalef);
    pop();
  }

  move() {
    push();
    //let speedY = (mouseY - this.lastmouseY)*0.1;
    this.vel.x +=
      (mouseX - this.lastmouseX) * 0.01 * constrain(this.scalef, 0.1, 1.1);
    this.pos.y -= this.vel.y * 0.1; //+speedY;
    //this.speedX = (mouseX - width / 2) * this.scalef * .1;
    this.vel.x *= 0.92;
    //speedY*=0.92
    this.pos.x += this.vel.x;
    if (this.pos.x < 0 - (this.scalef * 350) / 2)
      this.pos.x = windowWidth * 1 + (this.scalef * 350) / 2;
    if (this.pos.x > windowWidth * 1 + (this.scalef * 350) / 2)
      this.pos.x = 0 - (this.scalef * 350) / 2;
    if (this.pos.y < 0 - (this.scalef * 350) / 2)
      this.pos.y = windowHeight * 1 + (this.scalef * 350) / 2;
    this.lastmouseX = mouseX;
    //print(this.pos.y+ ' ' + this.scalef+ ' '+ height)
    pop();
  }
}

class textreveal {
  constructor(texto, x, y, size = 18) {
    push();
    this.sourceText = texto;
    this.x = x;
    this.y = y;
    this.size = size;
    color("white");
    this.reveal = 0;
    pop();
  }
  show() {
    push();
    textAlign(CENTER, CENTER);
    textSize(this.size);
    if (this.reveal < this.sourceText.length) this.reveal += 0.5;
    text(this.sourceText.substring(0, this.reveal), this.x, this.y);
    pop();
  }
  unshow() {
    push();
    textAlign(CENTER, CENTER);
    textSize(this.size);
    if (this.reveal > 0) this.reveal -= 0.5;
    text(this.sourceText.substring(0, this.reveal), this.x, this.y);
    pop();
  }
  updateLocation(newX = this.x, newY = this.y) {
    this.x = newX;
    this.y = newY;
  }
}

var prevSec;
var hearts = [];

let coracaosetup = 0;

function coracao() {
  push();
  rectMode(CENTER);
  angleMode(DEGREES);
  var S = second();
  var increment = 50;
  if (prevSec != S) {
    millisRolloverTime = millis();
  }
  prevSec = S;
  var mils = floor(millis() - millisRolloverTime);

  background(cordoFundo);
  if (mils % increment == 0) {
    hearts.push(new makeHeart(random(width), 100));
  }

  for (i = 0; i < hearts.length; i++) {
    push();
    hearts[i].display();
    hearts[i].move();
    pop();
  }
  angleMode(RADIANS);
  pop();
}

function makeHeart(x, y) {
  push();
  this.x = x;
  this.y = y;
  var size = 40;
  var S = second();
  pop();

  this.display = function() {
  
    push();
    //noStroke();
    stroke(0);
    strokeWeight(0.5);
    var opacity = 200;
    fill(220, 113, 113, opacity);
    //fill(223, 119, 122, 255);
    rotate(45);
    rect(this.x, this.y, size, size);
    arc(this.x - size / 2, this.y, size + 10, size, 90, 270, CHORD);
    arc(this.x, this.y - size / 2, size, size + 10, 180, 360, CHORD);
    pop();
  };
  this.move = function() {
    var speed = 5;
    this.x -= speed;
    this.y -= speed;
  };
}

var xoff = 0,yoff = 0,zoff = 0;
function coracaofinal(pag) {
  if (pag < 3 + dados.getRowCount()) return 0;  //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
  //window.open("https://editor.p5js.org/arthurrrbello@gmail.com/full/MNdMp0RUb");
  background(cordoFundo);
  beginShape();
  fill(255,map(mouseX, 0, width/2,0,255));
  stroke(255);
  //translate(width/2,height/2)
	for (a = 0; a < TWO_PI; a+=0.01) {
    xoff=cos(a);
    yoff=sin(a);
    r=1*map(noise(xoff,yoff,zoff),0,1,8,11);
    
		x=r*(16*sin(a)*sin(a)*sin(a))+width/2;
    y=-r*(13*cos(a)-5*cos(2*a)-2*cos(3*a)-cos(4*a))+height/2;
    vertex(x,y);
		
		//xoff += 0.01;
	}
  endShape(CLOSE);
	zoff+=0.01
	//print(noise(x));
	//noLoop()
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

/*
///////////////////////////////////////////

// this class describes the properties of a single particle.
class Particle {
// setting the co-ordinates, radius and the
// speed of a particle in both the co-ordinates axes.
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,8);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

// creation of a particle.
  createParticle() {
    noStroke();
    fill('rgba(200,169,169,0.5)');
    circle(this.x,this.y,this.r);
  }

// setting the particle in motion.
  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

// this function creates the connections(lines)
// between particles which are less than a certain distance apart
  joinParticles(paraticles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<85) {
        stroke('rgba(255,255,255,0.04)');
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}

// an array to add multiple particles
let particles = [];
particleSetup = 0;

function particulas(){
  if(particleSetup == 0) {
  //createCanvas(720, 400);
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
  }
  particleSetup = 1;
}


  //background('#0f0f0f');
  background(cordoFundo)
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  
 }
}

/////////////////////////////////////////////////// */
