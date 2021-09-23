// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO


//1- LEIA O CÓDIGO ABAIXO 



// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])



//reposta: Matheus Nachtergaele
//         Virginia Cavendish //  [0,1,2,3]   4-1 =3 , quem ocupa a posição 3 é Virgínia
//         canal: "Globo", horario: "14h"   
   

//__________________________________________________________________________________



// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)


//a)O que vai ser impresso no console?
//resposta:      nome: 'Juca', idade: 3, raca: 'SRD'
              // nome: 'Juba', idade: 3, raca: 'SRD'
              // nome: 'Jubo', idade: 3, raca: 'SRD'



//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//resposta:  significa que está pegando dandos do objetp principal , do qual ele faz parte. E  a esta ação o 
//nome dado é espelhamento (SPREAD)



//____________________________________________________________________________________


// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// resposta : false, ele está chamando a variável que foi atribuída como
// valor o boolean false .  

//  resposta : undefined , ele está chamando a variável no qual não foi atribuido nenhum valor
// a ela.


//____________________________________________________________________



//EXERCÍCIO DE ESCRITA DE CÓDIGO 


//a)Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos 
//(um array que sempre terá exatamente três apelidos). Depois, 
//escreva uma função que recebe como entrada 
//um objeto e imprime uma mensagem no modelo abaixo: 



//  const pessoa = {
//     nome: "Laís",
//     apelidos: ["Lá", "Lai", "Lalai"]
// }

// curiosidades = (pessoa) => {
//     console.log("Eu sou " + pessoa.nome + " mas pode me chamar de " + pessoa.apelidos)
// }

// curiosidades(pessoa)


//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
//mas com uma nova lista de três apelidos. 
//Depois, chame a função feita no item anterior passando como argumento o novo objeto


//  const pessoa = {
//     nome: "Laís",
//     apelidos: ["Lá", "Lai", "Lalai"]
// }

// const novidadesDaPessoa = {
//     ...pessoa,
//     apelidos: [ "Lali", "Lalá" , "Laisinha"]
// }


// curiosidades = (novidadesDaPessoa) => {

// console.log("Eu sou " + novidadesDaPessoa.nome + " mas pode me chamar de " + novidadesDaPessoa.apelidos)
// }


// curiosidades(novidadesDaPessoa)


//2) RESOLVA OS PASSOS A SEGUIR

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`
// - Exemplo




// const people1 = 
//     {
//     nome: "Helena",
//     idade: 30 ,
//     profissao: "atriz"
    
//     }



//     const people2 = 
//     {
//     nome: "Laís",
//     idade: 29,
//     profissao: "web developer"
//     }

    
//      minhaFuncao = (people1) => {
//       const array = [people1.nome,  +  ''  + people1.nome.length, + ''+ people1.idade, +''+ people1.profissao, + '' + people1.profissao.length]
//       return array
//     }




//  console.log(minhaFuncao(people1))
   
   
// minhaFuncao = (people2) => {
//     const array = [people2.nome,  +  ''  + people2.nome.length, + ''+ people2.idade, +''+ people2.profissao, + '' + people2.profissao.length]
//     return array
//   }




// console.log(minhaFuncao(people2))
 

// //3)

// //Resolva os passos a seguir: 

// //a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

// //respota:   

// let carrinho =[]


// //b) Crie três novos objetos que representem frutas de um sacolão. Eles 
// //devem ter as seguintes propriedades: nome (string) e disponibilidade 
// //(boolean - devem começar como true)

// const melancia =
// {
// nome: "melancia",
// disponibilidade: true
// }


// const ameixa =
// {
// nome: "ameixa",
// disponibilidade: true
// }

// const caqui =
// {
// nome: "caqui",
// disponibilidade: false
// }


// // //c) Crie uma função que receba um objeto fruta por parâmetro e 
// // //coloque-a dentro do array de carrinho. Invoque essa função passando 
// // //os três objetos criados. 



// adicionarNoCarrinho = (fruta) => {
//     console.log ('fruta:', fruta)
//       carrinho.push(fruta)
//       return console.log (JSON.stringify(carrinho))
//     }
    
    
//     adicionarNoCarrinho(caqui);
//     adicionarNoCarrinho(ameixa);
//     adicionarNoCarrinho(melancia);
     


//DESAFIO

//1)

// Crie um função que pergunte ao usuário seu nome, sua idade e sua 
// profissão e depois imprima no console um objeto com essas propriedades. 
// Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.



//  const dados = {
//     nome: prompt("Digite seu nome:"),
//     idade: Number(prompt("Digite sua idade:")),
//     profissao: prompt("Digite a sua profissão:")
// }

// const perguntasUsuario = (dados) => {
//     console.log(dados.nome, dados.idade, dados.profissao);
//     console.log(typeof (dados))
// }

// perguntasUsuario(dados)



//2)Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: 
//ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:

// O primeiro filme foi lançado antes do segundo? false
// O primeiro filme foi lançado no mesmo ano do segundo? true



// const filme1 = {
//         nome: "Viúva Negra",
//         ano: 2021
//          }

// const filme2 = {
//         nome: "Cruela",
//         ano: 2021 
//         }
    


//     imprimirFilme = (filme1, filme2) => {
//         console.log("O primeiro filme foi lançado antes do segundo?"+ (filme1.ano > filme2.ano))
//         console.log("O primeiro filme foi lançado no mesmo ano do segundo?"+ (filme1.ano == filme2.ano))
//     }
    
//     imprimirFilme (filme1, filme2)



//3)Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar 
//o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar 
//esse mesmo objeto com a propriedade disponibilidade com o valor invertido.





// let carrinho =[]


// const melancia =
// {
// nome: "melancia",
// disponibilidade: true
// }


// const ameixa =
// {
// nome: "ameixa",
// disponibilidade: true
// }

// const caqui =
// {
// nome: "caqui",
// disponibilidade: false
// }


// carrinhoValorInvertido = (fruta) => {
//        console.log ('fruta:', !fruta)
//       carrinho.push(fruta)
//       return console.log (carrinho)
//     }
    


//     carrinhoValorInvertido(caqui);
//     carrinhoValorInvertido(ameixa);
//     carrinhoValorInvertido(melancia);
     



