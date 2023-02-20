//Código do carro
 let yCarros = [40, 96,150, 211,263,319,40 ,96, 211 ];
 let xCarros = [600, 600, 600, 600, 600, 600, 900, 900, 900];
 let speedCarros =[-5,-6, -3.2, -3.7,-3.3,-2.3,-5,-6, -3.7];
 let wCarro = 50 // width carros
 let hCarro = 40 // heigth carros

 function mostraCarro(){
    if (pontos <5){ 
      for (let i = 0 ; i < 6; i ++ )
      { image(carrosImg[i],xCarros[i], yCarros[i],wCarro,hCarro);
      }
    } // Mostra carros no nivel 1 (antes de 5 pontos)
    else{
      for (let i = 0 ; i < carrosImg.length; i ++ )
      { image(carrosImg[i],xCarros[i], yCarros[i],wCarro,hCarro);}
     } // Mostra carros no nivel 2 (a partir de 5 pontos)
  } //Função  para mostrar os carros tanto no nível 1 quanto nível 2

 function movimentaCarro(){
    for (let i = 0; i < carrosImg.length;i++)
       { xCarros[i] += speedCarros[i];
       }
   
  }// Função para movimentar os carros 

 function carroloop(){
    for (let i = 0; i < carrosImg.length;i++)  
    {  if(carroloop2(xCarros[i]))
       {
          xCarros[i] = 600; // loop dos carros
       }
    }
 } // Função que faz os carros rodarem em looping
 
 function carroloop2 (xcarro){
   return xcarro < -50; 
  } /* Função usada para mostrar a posição do loop dos carros 
    usada na função carroloop()*/

