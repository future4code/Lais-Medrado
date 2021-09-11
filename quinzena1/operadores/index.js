//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1- Leia o código abaixo. Indique todas as mensagens impressas no console, 
//SEM EXECUTAR o programa.

//const bool1 = true
//const bool2 = false
//const bool3 = !bool2

//let resultado = bool1 && bool2
//console.log("a. ", resultado)

// resultado acima é falso, pq o operador && é usado para todas as condições verdadeiras, o que no caso 
//não é 

//resultado = bool1 && bool2 && bool3 
//console.log("b. ", resultado) 

// resultado acima é falso, pq o operador && é usado para todas as condições verdadeiras, o que no caso 
//não é 


//resultado = !resultado && (bool1 || bool2) 
//console.log("c. ", resultado)

// começando pelos parênteses, (bool1 || bool2) é verdadeiro, a variável resultado é falso , logo Falso&&verdadeiro
//obtem se  uma  sentença falsa , porém a frente temos o operador não que inverte o resultado , nos proporcionando
//uma sentença verdadeira



//console.log("d. ", typeof resultado)

//são váriaveis do tipo booleans pois recebem como resultado valores true ou false


//2- Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: 
//consegue perceber algum problema? O que será impresso no console?



//let primeiroNumero = Number (prompt("Digite um numero!"))
//let segundoNumero = Number (prompt("Digite outro numero!"))

//const soma =  primeiroNumero + segundoNumero

//console.log (soma)


// olá colega, o que será impresso na tela é a concatenação dos números


//3- olá colega, o código está quase certo, só faltou fazer a conversão de string para number,
//fazendo isto a operação de adição acontece. 




//EXERCÍCIO DE ESCRITA DE CÓDIGO 

//1- Faça um programa que:

//a) Pergunte a idade do usuário
//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
//c) Imprima na console a seguinte mensagem: 
//"Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)
//d) Imprima na console a diferença de idade (não tem problema se sair um número negativo)



/*const  idadeDoUsuario  = Number(prompt ("Qual a sua idade?"))
const idadeDoAmigo  = Number (prompt ("Qual a idade do seu melhor amigo?"))

let resultado = idadeDoUsuario > idadeDoAmigo
let diferença = idadeDoUsuario - idadeDoAmigo

console.log ("Sua idade é maior do que a do seu melhor amigo?", resultado)

console.log ( diferença)*/




//2- 2. Faça um programa que:

    //a) Peça ao usuário que insira um número **par**

    //b) Imprima na console **o resto da divisão** desse número por 2.

    //c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

    //d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

    


// let NumeroPar  = Number (prompt ("Insira um número par:"))

// let resultadoDivisão = NumeroPar % 2

//  console.log (" O resto da divisão do número ", NumeroPar,"dividido por 2 é igual a", resultadoDivisão)

//  o padrão notado após testar diversos números pares, é que o resto é zero

// o padrão notado após testar diversos números pares, é que o resto é um número diferente de zero






  //3 - Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console

 //a) A idade do usuário em meses
// b) A idade do usuário em dias
 //c) A idade do usuário em horas



// let idadeDoUsuario  = Number (prompt("Qual a sua idade?"))


// let idadeEmMes = idadeDoUsuario * 12
// let idadeEmDias = idadeEmMes * 30
// let idadeEmHoras = idadeEmDias * 24

// console.log ("Você tem ", idadeEmMes, "meses de idade")
// console.log ("Você tem ", idadeEmDias, "dias de idade")
// console.log ("VocÊ tem", idadeEmHoras, "horas de idade")



 //4-faça um programa que pergunte ao usuário dois números. 
 //Em seguida, faça as operações e imprima no console as seguintes mensagens:

//O primeiro numero é maior que segundo? true ou false
//O primeiro numero é igual ao segundo? true ou false
//O primeiro numero é divisível pelo segundo? true ou false
//O segundo numero é divisível pelo primeiro? true ou false


// let numeroUm  = Number (prompt("Digite um número:"))
// let numeroDois  = Number (prompt("Digite outro número:"))

// console.log( numeroUm > numeroDois)
// console.log( numeroUm === numeroDois)
// console.log( numeroUm % numeroDois === 0 )
// console.log( numeroDois % numeroUm === 0 )



//DESAFIO

//1-
// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
// b)Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter


// a) let gFahrenheit = 77
// let gKevin = (gFahrenheit- 32)*(5/9) + 273.15
// console.log (gFahrenheit - 32 ) * (5/9) + 273.15


// b)(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

// let gCelsius = 80
// let gFahrenheit = (gCelsius)  *(9/5) + 32
// console.log ( gFahrenheit)


//c) let gCelsius = 30
// let gFahrenheit = (gCelsius)  *(9/5) + 32
// let gKevin = (gFahrenheit- 32)*(5/9) + 273.15
// console.log ( gFahrenheit)
// console.log (gKevin)



// d)let gCelsius = Number (prompt("Digite um valor em graus Celsius para conversão:"))

// let gFahrenheit = (gCelsius)  *(9/5) + 32
// let gKevin = (gFahrenheit- 32)*(5/9) + 273.15
// console.log ( gFahrenheit, "ºF")
// console.log (gKevin, "ºK" )


//2-Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar 
//o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia 
//custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.


// a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
// let quilowattHora = 0.05
// console.log ( 280 * quilowattHora, "reais")


// b)Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o 
// valor a ser pago pela mesma residência  acima considerando 15% de desconto

// let consumoDeEneria = 280 *0.05
// let desconto = 14/(100*15)
// console.log ("Valor a ser pago com desconto: ", consumoDeEneria - desconto, "R$" )



//3- 

// a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 
// 20lb para kg. Imprima  a resposta no console da seguinte forma: 

// 20lb equivalem a X kg


// let lb = 20
// let X = lb / 2.2046
// console.log ( "20 lb equivalem a ", X,  "kg ")


//b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que 
//converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
//10.5oz equivalem a X kg

// let oz = 10.5
// let X = oz / 35.274

// console.log (" 10.5 oz equivalem, a ", X , "Kg")



//c) Procure uma forma de converter milha (mi) para metro (m) e escreva 
//um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
//100mi equivalem a X m


// let milhas = 100
// let X = milhas / 0.00062137

// console.log ( "100 milhas equivalem a ", X , "milhas")


//d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 
//50ft para m. Imprima  a resposta no console da seguinte forma: 
//50ft equivalem a X m

//  const pes = 50
//  const X = pes / 3.2808

//  console.log ( "50  pés  equivalem a", X , "metros")


//e)Procure uma forma de converter galão (gal) para litro (l) e escreva um programa 
//que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
//103.56gal equivalem a X l

// const galao = 103.56
// const X = galao / 0.26417
// console.log ( "103.56 gal equivalem a", X , "litros")



//f)Procure uma forma de converter xícara (xic) para litro (l) e escreva um
// programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
//450 xic equivalem a X l

// const xic = 450
// const X = xic/ 0.24
// console.log ( "450 xic equivalem a", X , "litros")


//g)// Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao 
// usuário o valor da unidade original antes de converter

let libras = Number (prompt("Digite o valor em libras que você quer converter em quilograma:"))

let X = libras / 2.2046

console.log (libras, "libras equivalem a ", X,"quilogramas") 
