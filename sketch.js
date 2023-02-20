

function setup() {
  createCanvas(500, 400);
  trilha.loop()
}

function draw() {
  background(estradaImg) // define a imagem de fundo
  mostraAtor() 
  mostraCarro()
  movimentaCarro()
  movimentaAtor()
  carroloop()
  colisao()
  placar()
  ganhaPontos()
}