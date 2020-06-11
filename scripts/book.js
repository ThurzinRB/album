let frame;
let booksetup = 0;  //variavel de inicialização
let pagina = [];    //criação de array de paginas

function book(pag){
  if(pag < 3) return; //função roda somente após pag >= 3
  if(booksetup == 0){
    color('white');
    frame = new Scribble();
    let nPages = dados.getRowCount();
    for(var i = 0; i < nPages; i++){
      pagina[i] = new paginas(dados.get(i,'url'),dados.get(i,'legenda'));
    }
    console.log(pagina[0]);
    booksetup++;
  }
    background(0);
    pagina[pag-3].showImage();
    pagina[pag-3].showText();
  
}

class paginas{
  constructor(url, legenda, x = width*.25, y = height/2 ){
    this.x = x;
    this.y = y;
    this.url = url;
    legenda = quebraLinha(legenda);
    this.legenda = new textreveal(legenda,this.x*3,this.y);
    this.foto = loadImage(this.url);
  }
  showImage(x = width*.25,y = height/2){
    imageMode(CENTER);
    noTint();
    image(this.foto, this.x = x, this.y =y);
  }
  showText(){
    noStroke();
    fill('white');
    this.legenda.show();
  }
}
//função para identificar quebra de linha, gambiarra? talvez.
function quebraLinha(legendas){
  let words = legendas.split("/n");
  let newText = words.join('\n');
  console.log(newText);
  return newText;
}