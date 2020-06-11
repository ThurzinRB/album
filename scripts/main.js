// código principal  //
//let r = 255, g =182 , b = 193;

var numero_flores = 10;

let flor = [numero_flores]; //objeto flor que fica no background
var lastmousex;
var scribble; //retangulo desenhado a mao

var pag = 0; // variável controle de caminho
var luz = true;
let luzvalue = 0;
var time = 0;
/////////////////////////////////////////////////////////////////////

let chama = false;

let texto;

let bg1; //background1
let dados; //tabela de dados do album

function preload() {
  bg1 = loadImage("/assets/bg1.jpg"); //aaaaaa
  dados = loadTable("./album/dados.csv", "csv", "header");
}
let cnv;
function setup() {
  //~~((1.7));
  cnv = createCanvas(windowWidth*1.05, windowHeight*1.05); //criando canva
  //background("black");
  background(cordoFundo);
  lastmousex = mouseX;
  scribble = new Scribble();
  textSize(18);
  //Criando as flores
  for (i = 0; i < numero_flores; i++) {
    flor[i] = new flower(
      random(windowWidth), //xPos
      random(windowHeight), //yPos
      11, //numLeafs
      10, //speed
      ((2 - 0.05) * (i + 1)) / numero_flores //scalef (2-0.05)*(i+1)/numero_flores
    );
  }
  texto = new textreveal("clique para continuar", width / 2, height / 1.5, 18);
  //book(pag);
  chama = false;
}

function draw() {
  //print(chama);
  //background(0);
  inicio(pag < 3, pag);
  book(pag,time);
  //print(pag);
  //print('dnv:'+ chama);
  chama = transicao(2, time, chama);
  time++;
  //ellipse(width/2, height/2 , 100,200);
  //noLoop();
<<<<<<< HEAD
  cnv.position((mouseX*0.01-width/2),(mouseY*0.01*height/2));
=======
  cnv.position((mouseX-height/2)*0.01,(mouseY-width/2)*0.01);
>>>>>>> 1c5db39c52ec7a134a4aa353cac6b5fb0cd7b16f
}

function transicao(value = 1, time = 0, chama) {
  if (chama == true) {
    push();
    //console.log('chamei');
    if (value == 1) {
      //modelo de transição 1

      let vel = 40;
      let troca = int((width / vel) * 0.5);
      let base = width;
      let altura = height;
      let tempototal = width / vel + base;

      if (time < tempototal) {
        //clear();
        //background(cordoFundo);
        fill(255);
        color(255);
        rectMode(CORNER);
        rect(time * vel - width, 0, base, altura);
        //print(time*vel+ ' ' + width);
        if (time == troca) {
          nextPag();
        }
      } else {
        chama = false;
        //console.log("acabou");
        //nextPag();
      }
    }
    if (value == 2) {
      //modelo de transição 2

      let vel = 40;
      let altura = height;
      let base = width;
      let num = 20;
      let a = 500;
      let b = altura / num;
      let troca = int((width / vel) * 0.8);
      let tempototal = width / vel + base/vel;

      if (time < tempototal) {
        //clear();
        //background(cordoFundo);
        fill(255);
        color(255);
        rectMode(CORNER);
        rect(time * vel - base, 0, base, altura);
        for (let i = 0; i < num; i++) {
          ellipseMode(CENTER);
          noStroke();
          ellipse(time * vel, b * i + b / 2, a, b);
          ellipse(time * vel - base, b * i + b / 2, a, b);
          //print
        }
        //print(time*vel+ ' ' + width);
        if (time == troca) {
          nextPag();
        }
      } else {
        chama = false;
        console.log("acabou");
        //nextPag();
      }
    }
    pop();
    return chama;
  }
}

//reconhece cliques do mouse
function mousePressed() {
  chama = !chama;
  time = 0;
  //pag = pag + 1;
}

function nextPag() {
  if (pag > 1 + dados.getRowCount()); // location.reload();;
  pag++;
}

//botoes
function keyPressed() {
  if (key == "l") {
    luz = true;
  } else if (key == "k") {
    luz = false;
  }
}

//redimensiona a página
function windowResized() {
  resizeCanvas(windowWidth*1.05, windowHeight*1.05);
  texto.updateLocation(windowWidth / 2);
}
