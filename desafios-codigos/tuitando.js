/* Desafio proposto pela plataforma DIO: 
 
O microblog Twitter é conhecido por limitar as postagens em 140 caracteres. 
Conferir se um texto vai caber em um tuíte é sua tarefa.

*/

let tweet = gets();

if (tweet.length <= 140) {
  console.log("TWEET");
} else {
  console.log("MUTE");
}