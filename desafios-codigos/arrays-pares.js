/* Desafio proposto pela plataforma DIO: 
 
Seu José possui uma lista de entregas das suas mercadorias e cada uma delas possui um número de identificação. 
As entregas mais urgentes são as que possuem o número de identificação PAR. 
Porém, seu José é muito atarefado e pediu sua ajuda para criar um programa que, de acordo com uma lista, 
mostrasse apenas as entregas urgentes (pares). Utilizando o seu conhecimento sobre Arrays, uma estrutura de 
dados que armazena uma coleção de dados em um bloco de memória, crie um programa que, 
dado a lista: {2, 3, 5, 7, 11, 13, 18, 34}, retorne como resultado apenas os números pares dessa array.

*/

var array = [2, 3, 5, 7, 11, 13, 18, 34];

for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}