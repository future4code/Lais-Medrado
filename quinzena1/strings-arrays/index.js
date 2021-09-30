// // Exercícios de interpretação de código


// //1-Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.


// let array
// console.log('a. ', array)

// //undefined, pq eu não atribui valor a array 


// array = null
// console.log('b. ', array)


// // null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)


// //11

// let i = 0
// console.log('d. ', array[i])


// // 3 , pq os elementos da lista na programação ocmeçam a ser contados pelo número 0

// array[i+1] = 19
// console.log('e. ', array)


// //[ 3,19,5,6,7,8,9,10,11,12,13]



// const valor = array[i+6]
// console.log('f. ', valor)

// // 9 ,pq a variável i ,está na posição 0 o que significa que é o número 3, a partir do 3, contando mais seis
// //número, chegamos no número 9 


// //2 -

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// //SUBI NO ÔNIBUS EM MIRROCOS 26



// //Exercícios de escrita de código


// //1-Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a 
// //seguinte mensagem:

// //O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

// let nomeDoUsuario = prompt("Digite aqui o seu nome:") 
// let emailDoUsuario = prompt("Digite aqui o seu email:") 

// const frase = `O e-mail  ${emailDoUsuario} foi cadastrado com sucesso. Seja bem- vinda(o)
// ${nomeDoUsuario}.`

// console.log( frase)


// // 2- Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em 
// // uma variável. Em seguida, siga os passos:

// // a)  Imprima na tela o array completo
// // b)Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada 
// // uma das comidas, uma embaixo da outra.
// // c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida 
// // da sua lista pela inserida pelo usuário. Imprima na tela a nova lista


// //a)


// let listaDeComidas = [ 
//     "feijão",
//     "cozido",
//     "pizza",
//     "abará",
//     "moqueca",
// ]

// //b)

// console.log (listaDeComidas)

// console.log   ("Essas são as minhas comidas preferidas:")
// console.log  (listaDeComidas[0])
// console.log  (listaDeComidas[1])
// console.log  (listaDeComidas[2])
// console.log  (listaDeComidas[3])
// console.log  (listaDeComidas[4])


// //outra forma usando a função forEach



// listaDeComidas.forEach(function(comida) {
//  console.log(comida);
// });


// //c) 

// let suaComida = prompt("Digite sua comida preferida:")

// listaDeComidas.splice(1,1, suaComida)

// console.log ( listaDeComidas)

// //na posição 1, remova 1 elemento e adicione "o que o usuário pedir " a essa posição






// //3- Faça um programa, seguindo os passos:

// // //A) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
// // let listaDeTarefas = []

// // //B)b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// // let tarefa1 = prompt("Digite uma tarefa que você precise realizar")
// // let tarefa2 = prompt("Digite uma segunda tarefa que você precise realizar")
// // let tarefa3 = prompt("Digite uma terceira tarefa que você precise realizar")

// // //C)Imprima o array na tela

// // listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
// // console.log (listaDeTarefas)

// // //D)Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 

// // let tarefaRealizada = Number (prompt ("De 0 a 2, qual dessas tarefas citadas vocês já realizou?"))

// // //E)Remova da lista o item de índice que o usuário escolheu.

// // listaDeTarefas.splice( tarefaRealizada,1)

// // //F)mprima o array na tela

// // console.log(listaDeTarefas)




//DESAFIO

//1-Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços


// let frase = (" Tudo posso naquele que me fortalece")
// let arrayFrase = frase.split(" ") // onde ele quebra e faz um novo elemento
// console.log(arrayFrase)



//2-

// const listaDeFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// const indiceLisDeFrutas = listaDeFrutas.indexOf("Abacaxi")

// const tamanhoDaLista = listaDeFrutas.length


// console.log ( "índice de abacaxi:", indiceLisDeFrutas, " Tamanho da lista:", tamanhoDaLista)