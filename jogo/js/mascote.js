seja yMascote = 360;
seja xMascote = 70;
deixe meusPontos = 0;
deixe colisao = falso;

function varificaColisao() {
    for (seja i = 0; i < imagensCarros.length; i++){
        colisao = colidirRectCircle(xCarros[i],yCarros[i],comprimentoCarros,alturaCarros, xMascote+17, yMascote+17,15);

        if (colisão == true) {
            if (meusPontos>0) {
                meusPontos -= 1
                yMascote = 360
            }
            outro{
                yMascote = 360
            }

        }

    }
    print('Colisão acontecendo', colisão)
}

function mostrarMascote() {
    imagem(imagemDoMascote, xMascote,yMascote, 40, 40);
}

function incluirPontos() {
    text(meusPontos,20,25);
    preencher(cor(255,0,0));
    tamanhodetexto(21);

    if (yMascote <20) {
        meusPontos++;
        yMascote = 365;   
    }
    
    
}

function movimentoMascote() {
    if (keyIsDown(UP_ARROW)) {
        yMascote -= 3 ;
    }

    if (keyIsDown(DOWN_ARROW)) {
        yMascote += 3 ;
    }
    
    if (keyIsDown(LEFT_ARROW)) {
        xMascote -= 3 ;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        xMascote += 3 ;
    }
}
 