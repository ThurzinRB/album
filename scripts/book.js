let frame;
let booksetup = 0; //variavel de inicialização
let pagina = []; //criação de array de paginas
let clique;
function book(pag,time) {
  if (pag < 3) return; //função roda somente após pag >= 3
  if (booksetup == 0) {
    color("white");
    frame = new Scribble();
    let nPages = dados.getRowCount();
    for (var i = 0; i < nPages; i++) {
      pagina[i] = new paginas(dados.get(i, "url"), dados.get(i, "legenda"), i%2);
    }
    console.log(pagina[0]);
    clique = new textreveal('clique para continuar',width/2,height*85);
    booksetup++;
  }
  //background(0);
  //particulas();
  push();
  coracao();
  pop();
  //tint(time)
  //cor = color(cordoFundo);
  //cor.levels[3]=100
  //print('time '+time);
  let opac = time
  if (pag>3){
    opac-=30
    opac+=17
  }
  print('opac ' +opac+' pag ' + pag);
  //print('pag ' + pag);
  //tint(cor.levels[0],cor.levels[1],cor.levels[2],exp(opac*2));
  tint(255,exp(opac*0.1));
  pagina[pag - 3].showImage(width, height);
  
  
  //print(cor);
  
  pagina[pag - 3].showText(width, height);

  //clique para próxima pag
  push();
    rectMode(CENTER);
    noStroke();
    fill('#b76e79');
    rect(width/2+10,height*.85+10,350,40,20);
    strokeWeight(3);
    fill('white');
    rect(width/2,height*.85,350,40,20);
    noStroke();
    color('black');
    //clique.show();
    text('clique para continuar',width/2,height*85)
  pop();
  
}

class paginas {
  constructor(url, legenda, estilo, x = width, y = height) {
    if(estilo == 0){
      this.xfoto = x *.33;
      this.xtexto = x *.66;
    }
    else{
      this.xfoto = x * .66;
      this.xtexto = x *.33;
    }
    this.y = y *.5;
    this.url = url;
    legenda = quebraLinha(legenda);
    this.legenda = new textreveal(legenda, this.xtexto, this.y);
    this.foto = loadImage(this.url);
  }
  showImage(x =this.xfoto, y = this.yfoto / 2) {
    imageMode(CENTER);
    //noTint();
    image(this.foto, (this.xfoto), (this.y));
  }
  showText(x = this.xtexto, y = this.ytexto) {
    push();
    rectMode(CENTER);
    fill('#b76e79');
    rect(this.xtexto+10,this.y+10,300,150,20);
    fill('white');
    rect(this.xtexto,this.y,300,150,20);
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
