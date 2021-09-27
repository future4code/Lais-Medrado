//EXERCÍCIOS DE INTERPPRETAÇÃO DE CÓDIGOS


//1-Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa:


// let a = 10
// let b = 10

// console.log(b)

// b = 5
// console.log(a, b

// resposta:
// Foi declarado 2 variáveis (a b) usando let, o que significa que elas podem sofrer futuras modificações.
// Após isto uma delas foi impressa (b), obtendo como resultado o número 10
// foi atribuido um novo valor a variável (b) e após a impressão ela recebeu o valor de  5





//2-Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.


// let a = 10
// let b = 20
// let c
// c = a
// b = c
// a = b

// console.log(a, b, c)


// repsota - Foi declarado 3 variáveis, para as variáveis (a b) foram atribuidos valores de 10 e 20 respectivamente,
// a terceira varIável (c) não teve valor numérico  atribuído, mas o programa informou  que a atribuição dela é
// a  mesma da variável (a), que a variável (b) é igual a da  (c) e que a variável (a) é igual a DA (b).
// Após isto os valores  impressos neste programa foram: 10 10 10 


//3-Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis.
 //Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os 
 //nomes não podem começar com números ou caracteres especiais


// let p = prompt("Quantas horas você trabalha por dia?")
// let t = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${t/p} por hora`)


// respota O programa calcula o valor da hora de trabalho do profissional.

//  modificações das variáveis:
// substituir let p por horasPorDia
//  substituir let t por valorDaDiária








// EXERCÍCIO DE ESCRITA DE CÓDIGO


// 1-Construa um programa, seguindo os seguintes passos:

//a)a) Declare uma variável para armazenar um nome, sem atribuir um valor.
//b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
//c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
//d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
//e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis 
//que acabou de criar.
//f) f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? 
//Escreva em um comentário de código.
//g)g) Para finalizar, imprima na tela a mensagem: "Olá nome,  
//você tem idade anos". Onde nome e idade são os valores que o usuário inseriu


// resposta:
let nomeDoUsuário
let idadeDoUsuário

console.log( typeof nomeDoUsuário)
console.log ( typeof idadeDoUsuário)

// Variáveis do tipo undefined, porque não foi atribuído valor para elas.



nomeDoUsuário = prompt ('Digite aqui o seu nome:')
idadeDoUsuário = prompt ('Digite aqui a sua idade:')


console.log (typeof nomeDoUsuário)
console.log (typeof idadeDoUsuário)


// O tipo das duas variáveis mudou. Agora elas são strings, porque tudo que vem do prompt é 
//um conjunto de caracteres


//Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". 
//Onde nome e idade são os valores que o usuário inseriu*/


console.log ('Olá', nomeDoUsuário,  'você tem',  idadeDoUsuário,  'anos')



//2-

//Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado cada uma em uma
 //variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

//a) Crie três novas variáveis, contendo as respostas
//b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
//exemplo : Você está usando uma roupa azul hoje? - SIM

//resposta
 aprendendo = prompt ('Ela está aprendendo ?')
 covid = prompt ('Ela está com covid?')
 feliz = prompt ('Ela está feliz?')



 const aprendendo = sim
 const covid = não
 const  feliz = sim



 console.log ('Ela está aprendendo', aprendendo, 'Ela está com covid?' , covid, 'Ela está feliz?', feliz)




//3- Suponha que temos duas variáveis a e b, cada uma com um valor inicial:
//  let a = 10
//  let b = 25
//Agora, queremos trocar os valores delas, de forma que a passe a ter o valor 
//de b e b passe a ter o valor de a. 
//Ou seja, no caso desse exemplo acima, a passaria a ser 25 e b passaria a ser 10.

//ex da lógica:

// let a = 10
// let b = 25

// // Aqui faremos uma lógica para trocar os valores

// // Depois de trocados, teremos o seguinte resultado:
// console.log("O novo valor de a é", a) // O novo valor de a é 25
// console.log("O novo valor de b é", b) // O novo valor de b é 10

//Crie a lógica que deve ser inserida no código para que os valores de a e b sejam 
//trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: 
//não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem, a lógica 
//do seu programa teria que mudar também). 


//resposta

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
// 1. O primeiro número somado ao segundo número resulta em: x.
// 2. O primeiro número multiplicado pelo segundo número resulta em: y.


//respota


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
