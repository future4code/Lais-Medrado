//EXERCICIO DE ESCRITA DE CÓDIGO 

//1- O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// ELE DECLARA UMA VARIÁVEL VALOR . E AÍ ELABORA UMA  FUNÇÃO COM UMA ESTRUTURA DE CONTROLE USANDO O FOR , 
// que diz de início que a variável i é igual a  0
// a condição de parada retornando um boleano é que o sistema vai rodar enquanto a variável i for menor que 5
//e o incremento é adicionar adicionar 1 que no caso é executado  toda vez que a variável retorna da ação 

//valor = valor + i 
//i = i+1
// valor : 0;1;2;3;4 
//imprime 10 , que são os valores que i assume dentro da condição , somados a variável valor . 





//2-LEIA O CÓDIGO ABAIXO :

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//a) o que vai ser impresso no console.log
//todos os numeros da lista, maiores que  18

//console.log : 19 - 21 - 25 - 27 - 23 - 30 




//b)Se eu quisesse acessar o índice de 
//cada elemento dessa lista, o for...of... é suficiente? Se não, o que poderia ser usado para fazer isso?


//bugou , não consegui fazer ainda



//3- 

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }


//bugou a mente, não consegui fazer ainda



//EXERCICIO DE ESCRITA DE CÓDIGO

//1-Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.

//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles,
// um por um, e guarde esses nomes em um array
//c) Por fim, imprima o array com os nomes dos bichinhos no console


let animal = Number(prompt("Quantos bichinhos de estimação você tem ?"))
while( animal === 0) {
            console.log("Que pena! Você pode adotar um pet!")
        if (animal > 0){
            let nome = prompt("Digite o nome de seus cachorrinhos:")
            console.log (nome)
        }
    }

    animal()