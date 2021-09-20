//Exercícios de interpretação de código

//1- Leia o código abaixo

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//a) a) O que vai ser impresso no console?
 
//reposta:   vai ser impresso o resultado da operação que acontece dentro da função, colocando como 
//variável o valor atribuídos em cada invocação da função 

//b) O que aconteceria se retirasse os dois console.log e simplesmente 
//invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?

// resposta: sem console.log, usado pra imprimir o valor da ação na tela. todaa operação aocntece com os valores 
// atribuídos a variável , só não aparece na tela 



//2-Leia o código abaixo :

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)


//a)  Explique o que essa função faz e qual é sua utilidade

//resposta: essa função inclui métodos a frase escrita pelo usuário , com ações de 
//colocar toda a frase em letra minúscula, e de retornar através de um 
//Boolean  se a frase contém a palavra cenoura


// //b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// i.   Eu gosto de cenoura   resposta: true
// ii.  CENOURA é bom pra vista    respota : true
// iii. Cenouras crescem na terra  resposta: true



// EXERCÍCIOS DE ESCRITA DE CÓDIGO 

//1-

// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando 
// algumas informações sobre você, como:
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
// Lembrando que a função não possui entradas, apenas imprime essa mensagem.


//resposta :  

// const meuDados = function(){
//     console.log('Laís Medrado, 30 anos de idade, moro em Salvador e sou estudante de desenvolvimento de software.')
// }

// meuDados()



//b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
//o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
//Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].


//resposta: 

// function dados (nome, idade, endereço, profissão) {
// console.log  ("Eu sou", nome, ",tenho", idade, "anos,", "moro em", endereço, "e sou", profissão )
// return console.log
// }


//  dados("lais", "30", "garcia", "web developer")


//2- ESCREVAS AS FUNÇÕES EXPLICADAS ABAIXO:


// a)Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas 
//entradas e retorne o resultado. Invoque a função e imprima no console o resultado.


// function doisNumeros (numero1 , numero2){
// let somaDoisNumeros = (numero1 + numero2)
// return somaDoisNumeros
// }

// console.log (doisNumeros (3, 4))


// b)  Faça uma função que recebe 2 números 
// e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.


// function doisNumeros (numero1 , numero2){
// let comparacao = (numero1 >= numero2)
// return comparacao
// }

// console.log (doisNumeros (3, 4))



//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é 
//par ou não


// function umNumero (numero1){
// let numeroPar = (numero1 % 2 === 0)
// return console.log (numeroPar)
// }
// umNumero(5)


// d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima 
// o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.





// function frase() {

// let texto = prompt( "Digite uma frase qualquer")

// return console.log (texto.length, texto.toUpperCase() )

     
// }

// frase()


//3) Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com 
// esses valores inputados pelo usuário sendo o argumento. Por fim, 
// mostre no console o resultado das operações:

// Números inseridos: 30 e 3
// Soma: 33
// Diferença: 27
// Multiplicação: 90
// Divisão: 10




function doisNumeros () {
    let numero1 = Number(prompt( "Digite um número:"))
    let numero2 = Number(prompt( "Digite um segundo número:"))
    
    let soma = numero1 + numero2
    let subtracao = numero1 - numero2
    let multiplicacao= numero1 * numero2
    let divisao = numero1 / numero2
    return console.log (soma, subtracao, multiplicacao, divisao)
    
    }

    doisNumeros( )