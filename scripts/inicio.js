function inicio(ativo,pag) {
  if (ativo == false) return; //verifica se a função deve rodar ou não
  if (pag != 2) { //nas páginas que não são a 2 algumas linhas estão em comum.
    background(0);
    
    //desenhar flores
    for (var i = 0; i < numero_flores; i++) {
      flor[i].show();
      flor[i].move();
    }
    
    //desenha o retângulo do meio com os textos
    stroke("white");
    fill("black");
    rectMode(CENTER);
    rect(width / 2, height / 2, 300, 150, 10);
    scribble.scribbleRoundedRect(width / 2, height / 2, 300, 150, 10);
    scribble.bowing = 1;
    strokeWeight(1);
    textAlign(CENTER);
    text("12/06/2020", width / 2, height / 2);
    
    
  }
  
  //página 1
  if (pag == 1) {
    
    //escrever o texto para continuar
    h = map(constrain(mouseY, height / 3, height), 0, height, 0, 90); //
    fill(255, h * 3 - 100);
    strokeWeight(1);
    textAlign(CENTER);
    //showtext('clique para continuar',width/2,height/1.5,true);
    texto.show();
    //text("clique para continuar", width/2,height/1.5);
    luzvalue = 0;
  }
  if (pag == 2) {
    
    //efeito fadeout
    if (luz == true && luzvalue < 255) luzvalue += 1;
    if (luz == false && luzvalue > 0) luzvalue -= 1;
    colorMode(RGB, 255);
    background(255,255,255,luzvalue * 10);
    
    
    texto.unshow();
    // background(196,162,143,luzvalue);
    //bg1.resize(100, 100)
    
    
    tint(255, luzvalue * 10);
    imageMode(CENTER);
    image(bg1, (mouseX*0.01+width/2),(mouseY*0.01+height/2));//desenha a imagem em um local determinado pelo mouse
  }
}
