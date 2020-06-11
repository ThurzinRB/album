frame = new Scribble();

function book(pag){
  if(pag < 3) return;
  image(bg1, (mouseX*0.01+width/2),(mouseY*0.01+height/2));
  let npages = dados.getColumnCount();
  
}

class pagina{
  constructor(url, legenda){
    this.url = 'url';
    this.legenda = 'legenda';
    this.foto = loadImage(this.url);
  }
  show(){
    imageMode(CENTER);
    img(this.foto, height/2, width/2);
  }
}