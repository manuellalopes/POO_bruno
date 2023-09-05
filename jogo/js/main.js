
// a function Ã© como se fosse um mÃ©todo em java
//na funÃ§Ã£o setuo difinimos as configuraÃ§Ãµes de largura e altura
function setup() {
    createCanvas(700,400);
}

// na funÃ§Ã£o de desenho definimos o que serÃ¡ exibido
function draw() {
    background(imagemDaEstrada);
    //o primeiro serve do eixo x, o segundo no eixo y, e os outros dois  altura/w e largura/h respectivamente
    //O image permite manipular o objeto no eixo X e Y como tambÃ©m W e H
    movimentoCarro();
    movimentoMascote();
    mostrarCarros(); 
    mostrarMascote();
    incluirPontos();
    varificaColisao();

  
    // Desenha o cÃ­rculo
 
}
    