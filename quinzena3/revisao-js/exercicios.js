// EXERCÍCIO 01
function inverteArray(array) {
let arrayInvertido = []
for (let i= array.length -1 ; i>=0 ; i--){
arrayInvertido.push(array[i])
}
return arrayInvertido

}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
let numerosParesElevados2 = []
for (let item of array ){
  if (item % 2 ==0) {
  let elevarPor2 = (item * item )
  numerosParesElevados2.push(elevarPor2)
  }
}
return numerosParesElevados2


}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
let nPares=  []
for ( let item of array) {
  if (item % 2 ===0) {
    nPares.push(item)
  }
}
 return nPares
  
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
let maiorNumero  = []
for (let i = 0; i<array.length; i++){
  let numeroDaVez = array[i]
  if (numeroDaVez> maiorNumero){
  maiorNumero = numeroDaVez
}
}
console.log (maiorNumero)
return maiorNumero


}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
//Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.

let quantidade = []
for (let i = 0; i<array.length; i++){
quantidade.push.array[i]
}

console.log (quantidade.length)
return quantidade
  
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
