// INTERPRETAÇÃO DE CÓDIGO

//1)

//const respostaDoUsuario = prompt("Digite o número que você quer testar")
//const numero = Number(respostaDoUsuario)

//if (numero % 2 === 0) {
//  console.log("Passou no teste.")
//} else {
//  console.log("Não passou no teste.")
//}


//a) Explique o que o código faz. Qual o teste que ele realiza? 

//   este código faz uma comparação entre variáveis do  tipo número

//b) Para que tipos de números ele imprime no console "Passou no teste"? 

// imprime para números em que o resto da divisão por dois é igual a zero , ou 
// seja número ímpares


//c) Para que tipos de números a mensagem é "Não passou no teste"? 

//  imprime para números em que o resto da divisão por dois é não é igual a zero , ou 
// seja números ímpares
 


//2)O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar 
//  algumas tarefas de um supermercado:


// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     //break; // BREAK PARA O ITEM c. //para quê esse break?
//    case "Cocô":
//     preco = 6.5
//     break; // BREAK PARA O ITEM c. //para quê esse break?
//     default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)



//a) a) Para que serve o código acima?

// o código serve para informar o preço das mercadorias que no caso são  frutas

//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?

//  será impresso 2,25

// c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem 
//impressa no console se retirássemos o break que está logo acima do default 
//(o break indicado pelo comentário "BREAK PARA O ITEM c.")?
 
//a mensagem impressa seria : "O preço da fruta  Pêra  é  R$  5" pq ao retirar o break no final
//do bloco do código em execução as linhas seguintes tbm são executadas, que no caso é o default dizendo que 
//da o  valor de 5 reais. 


//3) LEIA O CÓDIGO ABAIXO 


// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)


//a) que a primeira linha está fazendo?

//está recebendo uma variável do tipo número, ao pedir para o usuário digitar um primeiro número.

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

//ao digitar o nº 10  , msg expressa : " Esse número passou no teste "
//ao digitar o nº -10  , não há mensagem 


//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// Há erro , pois penso que não se pode invocar algo que não foi definido na estrutura de controle
//pra poder ser acessada dentro do escopo. Então há a variável dentro do escopo , mas ela não pode ser chamada sem 
// ser acessada antes. Porém diz que é mensagem secreta , se a mensagem é secreta é secreta. Não insista em chamar.

//___________________________________________________________________________



//EXERCÍCIOS DE ESCRITA DE CÓDIGO 

//1-Faça um programa que pergunta ao usuário 
//qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).



// let idade = Number(prompt("Qual a sua idade?"))

//  if(idade >= 18) {
//   console.log("Você pode dirigir")
//  } else {
// console.log("Você não pode dirigir")
//  }



//2-Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino)
// ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else


// const turno = prompt ("Se você estuda no turno matutino digite ( M ), vespetino digite (V) e noturno digite (N)")

// if ( turno == "M"  ) {
//    console.log("Bom dia!")  
// }else if ( turno == "V"  ) {
//    console.log("Boa tarde!")  
// }else if  ( turno == "N"  ) {
//     console.log("Boa noite!")  
// }


//3- Repita o exercício anterior, mas utilizando a estrutura de switch case agora:

//  const turno = prompt("Se você estuda no turno matutino digite ( M ), vespetino digite (V) e noturno digite (N)")

// switch (turno) {
//    case "M":
//       console.log("Bom dia!")
//       break
//    case "V":
//       console.log("Boa tarde!")
//       break
//    case "N":
//       console.log("Boa noite!")
//       break

// default:
//      console.log("Madrugada não é uma opção. Tente novamente escolhendo  matutino  ( M ), vespetino digite (V) ou noturno digite (N)")
// }



//4- Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme 
//com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta 
//ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique 
//se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!",
// caso contrário, imprima "Escolha outro filme :("




let generoDoFilme = prompt( "Qual o gênero do filme?")
let precoDoFilme = Number ( prompt( "Qual o valor do ingresso?"))

// console.log (generoDoFilme, precoDoFilme)


      function assistirFilme(
        generoDoFilme,
        precoDoFilme 
        
        )
    {


            if (
            (generoDoFilme === "Fantasia") &&
            (precoDoFilme  >  15))
            {
            console.log ("Bom filme")
             } else  {
            console.log ("Escolha outro filme")
             }


    }
     assistirFilme( generoDoFilme, precoDoFilme )
   

     