/* Desafio proposto pela plataforma DIO: 
 
A mamãe patinha ficou tão triste naquele dia que resolveu pedir 
sua ajuda para procurar além das montanhas, na beira do mar, 
quantos patinhos não voltaram de lá.

O arquivo de saída deve conter a quantidade de patinhos que retornaram.

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