// Variaveis das imagens e sons que usaremos no jogo
let estradaImg
let atorImg
let carro1Img
let carro2Img
let carro3Img
let carro4Img
let carro5Img
let carro6Img
let carro7Img
let carro8Img
let carro9Imag
let trilha
let somPonto
let SomColisao

function preload () //Função para carregar as imagens e sons do programa
  {
     estradaImg = loadImage("imagens/estrada.png")
     atorImg   = loadImage("imagens/ator-1.png")
     carro1Img = loadImage("imagens/carro-1.png")
     carro2Img = loadImage("imagens/carro-2.png")
     carro3Img = loadImage("imagens/carro-3.png")
     carro4Img = loadImage("imagens/carro-2.png")
     carro5Img = loadImage("imagens/carro-3.png")
     carro6Img = loadImage("imagens/carro-1.png")
     carro7Img = loadImage("imagens/carro-1.png") 
     carro8Img = loadImage("imagens/carro-2.png")
     carro9Img = loadImage("imagens/carro-1.png")
     carrosImg = [carro1Img, carro2Img, carro3Img, carro4Img, carro5Img, carro6Img, carro7Img, carro8Img, carro7Img]
     trilha = loadSound("sonds/trilha.mp3")
     somPonto = loadSound("sonds/pontos.wav")
     somColisao = loadSound("sonds/colidiu.mp3")
  }