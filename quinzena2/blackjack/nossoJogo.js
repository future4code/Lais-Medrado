




      //2- Os jogadores usam um baralho com muitas cartas. 
     //As cartas têm um número (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J , Q, K) e um naipe (Copas (♥️), Paus (♣️), Ouros(♦️)
     //e Espadas(♠️)). Por exemplo, uma carta do baralho é o dois de Paus (2♣️). Existem 52 possibilidades 
     //de cartas diferentes (13 números e 4 naipes).

     console.log ("Boas vindas ao jogo de Blackjack")
     let comandoInicial = confirm  (" Quer iniciar uma nova rodada?") 
 
        if (comandoInicial === false) {
        console.log ("O jogo acabou")
         } else if (comandoInicial === true) {
     //    console.log ("Boas vindas ao jogo de Blackjack")

        const numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J" , "Q", "K"] 

        const naipe = [ "copas", "paus", "ouros" , "espadas"]
   
        const escolhaDoNumero = Number(prompt("insira um numero de 1 a 13"))
        console.log(numero [escolhaDoNumero - 1]);
   
        const escolhaDoNaipe = (prompt ("insira um numero de 1 a 4"))
        console.log(naipe [escolhaDoNaipe - 1]);
        

       }
     
// //      //3- Os jogadores compram cartas do baralho. Ao comprar uma carta do baralho, ela pode ser de qualquer
// //      // uma das 52 cartas, com probabilidade igual




// //      //4-As cartas tem um valor de acordo com seu número (a carta 4♣️ tem valor 4, e a carta 9♦️ tem valor 9).
// //      // As cartas J, Q e K tem valor 10, e a carta A tem valor 11


//      function valor (numero, naipe) {
//       console.log (numero)
//       console.log (naipe)
//       let pontos
//       switch (numero) {
//          case 'A':
//             pontos = 11;
//             break;
//          case 'J':
//          case 'Q':
//          case 'K':
//          pontos = 10;
//          break;
//         default:
//            pontos = numero
//             break;
//       }
//    }



// //      //5- jogo inicia com cada jogador (usuário e computador) recebendo 2 cartas. 
// //      //A pontuação de cada jogador é a soma do valor das suas cartas


//          let usuario = (cartaUsuário1, cartaUsuario2) => {
//          let usuárioCarta1  = comprarCarta(cartaUsuário1) 
//          let usuarioCarta2 = comprarCarta(cartaUsuario) 
//          let usuarioTotal = cartaUsuário1 + cartaUsuario2
//          console.log ("Usuário - cartas:", cartaUsuário1, cartaUsuario2, "- pontuação", usuarioTotal )
//          }

//          let computador = (cartaComputador1, cartaComputador2) => {
//          let computadorCarta1 = comprarCarta(cartaComputador1)
//          let computadorCarta2 = comprarCarta(cartaComputador2)
//          let computadorTotal = cartaComputador1 + cartaComputador2
//          console.log ("Computador - cartas:", cartaComputador1, cartaComputador2, "- pontuação", computadorTotal )
//          }







// //      //6-O jogador com a maior pontuação ganha a rodada.



// //      //MONTANDO O JOGO


// //      // 1- Essa etapa do projeto consiste em criar um programa que:
// //      //Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!
// //      //Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?"

// //       // DICA
// //    //2-confirm é um comando que cria uma caixa com dois botões: ok e cancelar,
// //    // permitindo fazer perguntas de "sim" e "não". Caso o usuário responda sim 
// //    //(ok) o comando devolve o valor true, caso contrário, devolve false. Desta 
// //    //forma, podemos usar condicionais para decidir o que fazer em cada caso

// //          //if(confirm("pergunta de sim ou não")) {
// // 	      // o que fazer se o usuário clicar "ok"
// //          //} else {
// // 	     // o que fazer se o usuário clicar "cancelar"
// //         // }


// //         //3-Se o usuário responder cancel, imprime uma mensagem no console "O jogo acabou".
// //         //4-Se o usuário responder Ok, o programa deve iniciar uma nova rodada.





        
//         console.log ("Boas vindas ao jogo de Blackjack")
//         let comandoInicial = confirm  (" Quer iniciar uma nova rodada?")
    
//            if (comandoInicial === false) {
//              console.log ("O jogo acabou")
//           }else if (comandoInicial === true) {


// //   //COMEÇANDO A RODADA

// //   //4- A rodada consiste em sortear 2 cartas para cada jogador, definir a pontuação de cada jogador 
// //   //e informar o vencedor 
// //   //(usuário ou computador), ou empate, caso as pontuações sejam iguaiS



// //   //5-- Nós preparamos um método que permite sortear uma carta. Ele já está pronto e você só 
// //   //precisa invocá-lo. Cada carta sorteada é um objeto com duas propriedades: um texto que 
// //   //representa o que é escrito na carta; e um valor que mostra a pontuação da carta
       
// //                      //   const carta = comprarCarta(); 
// //                      //   // Sorteia uma carta. Por exemplo, o rei de ouros
                     
// //                      //   console.log(carta.texto) 
// //                      //   // imprime o texto da carta. Nesse caso: "K♦️"
                     
// //                      //   console.log(carta.valor) 
// //                      //   // imprime o valor da carta (um número). Nesse caso: 10)





// // //  6 - O programa deve mostrar, no console, as cartas e pontuação de cada jogador no formato mostrado abaixo

// //                      // "Usuário - cartas: Q♣️ 10♣️  - pontuação 20" 
// //                      // "Computador - cartas: Q♣️ 10♣️  - pontuação 20"



// // //- 7 - Além disso, deve indicar o vencedor ou um empate


// //                         // "Empate!"
// //                         // "O usuário ganhou!"
// //                         // "O computador ganhou!"



// //                          if (usuarioTotal > computadorTotal) {
// //          console.log ("O usuário ganhou!")
// //          } else if (usuarioTotal < computadorTotal) {
// //          console.log ("O computador ganhou!")
// //          } else if (usuarioTotal === computadorTotal) {
// //            console.log ("empate")
// //          