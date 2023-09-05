//posições dos carros
/* deixe xCarros1 = 630;
seja xCarros2 = 630;
seja xCarros3 = 630; */
deixe xCarros=[700.700.700.700.700.700]
deixe yCarros=[50.100.150.215.270.320]
deixe velocidadeCarros=[2,3.2,2.6,3.3,4.2,5]

seja comprimentoCarros = 40;
deixe alturaCarros =30;




function mostrarCarros() {
    for (seja i = 0; i < imagensCarros.length; i++) {
        image(imagensCarros[i],xCarros[i],yCarros[i], comprimentoCarros, alturaCarros);
        
    }
 /* imagem(imagemDoCarro1,xCarros1,34, comprimentoCarros, alturaCarros);
    imagem(imagemDoCarro2,xCarros2,90, 50, 50);
    imagem(imagemDoCarro3,xCarros3,145, 50, 50); */
    
}

function movimentoCarro() {
    for (seja i = 0; i < imagensCarros.length; i++) {
       xCarros[i] -= velocidadeCarros[i];

       if (xCarros[i]< -50) {
            xCarros[i]=700
        
       }
        
    }
}
