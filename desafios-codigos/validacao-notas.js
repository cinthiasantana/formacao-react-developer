/* Desafio proposto pela plataforma DIO: 
 
Para ajudar a calcular as notas referentes às duas avaliações dos alunos, 
uma professora pediu para que você desenvolva um programa que calcule e imprima a média semestral. 
Faça com que o algoritmo só aceite notas válidas (uma nota válida deve pertencer ao intervalo [0,10]). 
Cada nota deve ser validada separadamente.

Se uma nota inválida  for lida, deve ser impressa a mensagem "nota invalida".
Quando duas notas válidas forem lidas, deve ser impressa a mensagem "media = " 
seguido do valor do cálculo. O valor deve ser apresentado com duas casas após o ponto decimal.

*/

let n = parseInt(gets());
while (n !== -1) {
  let count = 0;
  if (n !== 0) {
    while (n !== 0) {
      n -= 1;
      count += 1;
      if (n !== 0) {
        n -= 1;
        count += 1;
      }
    }
    count -= 1;
  }
  console.log(count);
  n = parseInt(gets());
}