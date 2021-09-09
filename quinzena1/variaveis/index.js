//EXERCÍCIOS DE INTERPPRETAÇÃO DE CÓDIGOS

/* 
1 - Foi declarado 2 variáveis (a b) usando let, o que significa que elas podem sofrer futuras modificações.
Após isto uma delas foi impressa (b), obtendo como resultado o número 10

1.1- foi atribuido um novo valor a variável (b) e após a impressão ela recebeu o valor de  5

/* 

2 - Foi declarado 3 variáveis, para as variáveis (a b) foram atribuidos valores de 10 e 20 respectivamente,
a terceira varIável (c) não teve valor numérico  atribuído, mas o programa informou  que a atribuição dela é
a  mesma da variável (a), que a variável (b) é igual a da  (c) e que a variável (a) é igual a DA (b).
Após isto os valores  impressos neste programa foram: 10 10 10 


3- O programa calcula o valor da hora de trabalho do profissional.

3.1- modificações das variáveis:

3.1.1- substituir let p por horasPorDia
3.1.2- substituir let t por valorDaDiária

*/






// EXERCÍCIO DE ESCRITA DE CÓDIGO


// 1-
/
let nomeDoUsuário
let idadeDoUsuário

console.log( typeof nomeDoUsuário)
console.log ( typeof idadeDoUsuário)

// Variáveis do tipo undefined, porque não foi atribuído valor para elas.



nomeDoUsuário = prompt ('Digite aqui o seu nome:')
idadeDoUsuário = prompt ('Digite aqui a sua idade:')


console.log (typeof nomeDoUsuário)
console.log (typeof idadeDoUsuário)


/* O tipo das duas variáveis mudou. Agora elas são strings, porque tudo que vem do prompt é 
um conjunto de caracteres*/


/*Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". 
Onde nome e idade são os valores que o usuário inseriu*/


console.log ('Olá', nomeDoUsuário,  'você tem',  idadeDoUsuário,  'anos')



//2-

//Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado cada uma em uma
 //variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:


 aprendendo = prompt ('Ela está aprendendo ?')
 covid = prompt ('Ela está com covid?')
 feliz = prompt ('Ela está feliz?')



 const aprendendo = sim
 const covid = não
 const  feliz = sim



 console.log ('Ela está aprendendo', aprendendo, 'Ela está com covid?' , covid, 'Ela está feliz?', feliz)




 //3- Suponha que temos duas variáveis a e b, cada uma com um valor inicial


let a = 10
let b = 25
let c = 10
a=b
b=c

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 




//DESAFIO


//Faça um programa que receba dois números do usuário e faça as seguintes operações, 
//imprimindo os resultados no console da seguinte forma:



 let primeiroNumero = prompt ('Digite aqui o seu primeiro número :')
 let segundoNumero = prompt ('Digite aqui o seu segundo número:')

//console.log (typeof  primeiroNumero)
//console.log (typeof segundoNumero)

let atualizandoParaNumero1 = Number(primeiroNumero)
let atualizandoParaNumero2  = Number(segundoNumero)

 

 let X = atualizandoParaNumero1 + atualizandoParaNumero2
 let Y =  atualizandoParaNumero1  * atualizandoParaNumero2


 let atualizandoParaNumero1 = Number(primeiroNumero)
 let atualizandoParaNumero2 = Number(segundoNumero)


console.log( X ) 
console.log( Y )
