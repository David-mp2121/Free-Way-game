// posiçoes do Ator
let xator =85 //x do ator
let yator =366//y do ator
let hit = false // Variavel boleana que determina se o ator encosta no carro ou não
let pontos =0 // Variavel dos posntos que começam com 0

// Funções para exibir o ator e movimentalo:
  function mostraAtor(){
    image(atorImg,xator,yator,30,30)
    
  }

  function movimentaAtor(){
    if (keyIsDown(UP_ARROW))
      {
        if (yator > 366)
        {yator += -1;
        }else{
              yator += -2; 
             }
       }
    if (keyIsDown(DOWN_ARROW))
      {if(limiteTela()){   yator += +3; }}// ator não  desce mais do que o limite da tela
  }// Orienta a movimentação do personagem através das teclas 
 
  function colisao(){
  if (pontos<5) // colisão do carro level 1 (Antes dos 5 pontos)
  {
    for (let i = 0; i < 6;i++){
      hit = collideRectCircle(xCarros[i], yCarros[i], wCarro, hCarro, xator, yator+15, 20)
      if (hit){
        colidiu()
        somColisao.play()
        if (pontos>0) {pontos = pontos -1;} // O jogador não pode ficar com ponto negativos
      }
    }  
  }else // Colisão dos carros no level 2 (Mais carros em maior velocidade)
  {
    for (let i = 0; i < 6;i++){    
      hit = collideRectCircle(xCarros[i], yCarros[i], wCarro, hCarro, xator, yator+15, 20)
      if (hit){
        colidiu()
        if (pontos>0)
        {
          pontos = pontos -1 
           somColisao.play()
        }
      }
    }  
  }
    
  }//Identifica a colisão do ator nos carros

  function colidiu(){
    yator = 385
  }// Determina a posição de retorno apos colisão
  
  function placar (){
  textAlign(CENTER)
  textSize(25)
  fill(color(255,240,60)) 
  text(pontos, width/5, 27)
  
}// Mostra placar

  function ganhaPontos(){
    if(yator <15 ){
      pontos ++
      somPonto.play()
      colidiu()
    }
  }// contabilizador de pontos para quando o ator chegar ao topo da tela

  function limiteTela() {
  return yator <370
} /* Determina o limite maximo da borda inferior,
  usado na função movimentaAtor()*/


