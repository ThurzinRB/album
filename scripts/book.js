let frame;
let booksetup = 0; //variavel de inicialização
let pagina = []; //criação de array de paginas

function book(pag) {
  if (pag < 3) return; //função roda somente após pag >= 3
  if (booksetup == 0) {
    color("white");
    frame = new Scribble();
    let nPages = dados.getRowCount();
    for (var i = 0; i < nPages; i++) {
      pagina[i] = new paginas(dados.get(i, "url"), dados.get(i, "legenda"), i%2);
    }
    console.log(pagina[0]);
    booksetup++;
  }
  //background(0);
  //particulas();
  push();
  coracao();
  pop();
  //tint(time)
  cor = color(cordoFundo);
  cor.levels[3]=100
  print('time '+time);
  tint(cor.levels[0],cor.levels[1],cor.levels[2],255-time);
  pagina[pag - 3].showImage();
  
  
  //print(cor);
  
  pagina[pag - 3].showText();
}

class paginas {
  constructor(url, legenda, estilo, x = width, y = height / 2) {
    if(estilo = 0){
      this.xfoto = x * .33;
      this.xtexto = x *.66;
    }
    else{
      this.xfoto = x * .33;
      this.xtexto = x *.66;
    }
    this.y = y *.5;
    this.url = url;
    legenda = quebraLinha(legenda);
    this.legenda = new textreveal(legenda, this.xtexto, this.y);
    this.foto = loadImage(this.url);
  }
  showImage(x =this.xfoto, y = this.yfoto / 2) {
    imageMode(CENTER);
    noTint();
    image(this.foto, (this.x = x), (this.y = y));
  }
  showText() {
    push();
    rectMode(CENTER);
    fill('#b76e79');
    rect(this.x*3+10,this.y+10,300,150,20);
    fill('white');
    rect(this.x*3,this.y,300,150,20);
    noStroke();
    fill(cordoFundo);
    this.legenda.show();
    pop();
  }
}
//função para identificar quebra de linha, gambiarra? talvez.
function quebraLinha(legendas) {
  let words = legendas.split("/n");
  let newText = words.join("\n");
  console.log(newText);
  return newText;
}
