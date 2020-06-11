// código principal  //
var numero_flores = 10;
let flor = [numero_flores]; //objeto flor que fica no background
var lastmousex;
var scribble; //retangulo desenhado a mao

var pag = 0; // variável controle de caminho
var luz = true;
let luzvalue = 0;
/////////////////////////////////////////////////////////////////////

let texto;

let bg1; //background1
let dados; //tabela de dados do album
function preload() { 
  bg1 = loadImage("/assets/bg1.jpg");//aaaaaa
  dados = loadTable('./album/dados.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight); //criando canva
  background("black");
  lastmousex = mouseX;
  scribble = new Scribble();
  textSize(18);
  //Criando as flores
  for (i = 0; i < numero_flores; i++) {
    flor[i] = new flower(
      random(windowWidth) ,    //xPos
      random(windowHeight),    //yPos
      11,  //numLeafs
      10,   //speed
      (2-0.05)*(i+1)/numero_flores //scalef (2-0.05)*(i+1)/numero_flores
    ); 
  }
  texto = new textreveal("clique para continuar", width / 2, height / 1.5);
  //book(pag);
  
}

function draw() {
  //background(0);
  inicio(pag < 3,pag);
  book(pag);
}

//reconhece cliques do mouse
function mousePressed() {
  pag = pag + 1;
  if (pag > 2 + dados.getRowCount()) pag = 0;
}

function nextPag(){
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
  texto.updateLocation(windowWidth/2)
}
