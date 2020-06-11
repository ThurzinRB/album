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

function setup() {
  //~~((1.7));
  createCanvas(windowWidth, windowHeight); //criando canva
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
  book(pag);
  //print(pag);
  //print('dnv:'+ chama);
  chama = transicao(2, time, chama);
  time++;
  //ellipse(width/2, height/2 , 100,200);
  //noLoop();
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
      let troca = int((width / vel) * 0.5);
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
  if (pag > 1 + dados.getRowCount()) location.reload();;
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
  resizeCanvas(windowWidth, windowHeight);
  texto.updateLocation(windowWidth / 2);
}
