//PARTE 1 - RESUMOS E CHECKLIST

FUNÇÕES EM JAVASCRIPT

Uma função é um bloco de código que pode ser chamado (ou invocado) a partir de um nome;
O primeiro passo para criar uma função é declará-la. E para executa -lá  usa-se o  identificador dela;


OBJETO E JAVASCRIPT ⇒ Sintaxe, o que é e como usar

Objetos são estruturas de sintaxe que nos permitem representar dados mais complexos de uma maneira mais organizada
a sua estrutura é composta de chave, valor e propriedades. Estas propriedades  podem assumir quaisquer valores :

String, number, boolean, array, etc.
Funções (neste caso, são chamados de método


sintaxe de criação de um objeto :
ex1-
const instrutora = {
 nome: 'Amanda Rangel',
 idade: 27,
 email: 'mandinha_rock@gmail.com'  }


 ex2- 

 const instrutora = {
 nome: 'Chijo',
 frontender: true,
 responsabilidades: ["Dar aula","Criar novas aulas","Causar"],
 contaPiada: () => {
 console.log("É pa ver ou pa comer?")
 }
}



ARRAY => Sintaxe, o que é e como usar;

Arrays nada mais são do que listas de elementos

No javascript, usamos colchetes para agrupar os itens de uma lista:
 
const listaDeCompras = ["batata", "alface", "queijo"]
const listaDeNumerosMega = [2, 13, 26, 35, 41, 60] ;

PS: pode-se colocar qualquer tipo de elemento dentro de um array : Números, strings e booleanos .
Para acessar um elemento dnetro de um array é preciso saber que o array funciona de forma numerada. e o primeiro número da lista é é sempre o [0]


O javascript nos fornece algumas informações (propriedades) e ações (métodos) que podemos realizar sobre uma lista (array)

ps. lembrar que os métodos são acessados através de () - parênteses
e as propriedades não, exceto o length 



MAP  ⇒ Sintaxe, o que é e como usar

É um tipo de função  que só pode ser usada em  arrays

Definição: map significa "mapear"
Utilização: quando queremos criar um NOVO array baseado em informações do array original
Output: um novo array com tamanho igual ao tamanho do array original 
Input: somente uma função de callback
Esta função pode receber três parâmetros : 1º item / 2º index / 3º array


sintaxe que gosto/prefiro   usar :

const nomeDosPokemons = pokemons.map((pokemon, indice, array) => {
 return pokemon.nome
})




FILTER => Sintaxe, o que é e como usar

É um tipo de função  que só pode ser usada em  arrays
E deve retornar um boleano (true/false)

Definição: filter significa "filtrar"
Utilização: quando queremos criar um NOVO array retirando (ou não) alguns itens do array original
Output: um novo array com tamanho igual ou menor ao tamanho do array original 
Input: somente uma função de callback
Esta função pode receber três parâmetros : 1º item / 2º index / 3º array



sintaxe que gosto/prefiro usar:

const callback = (pokemon, indice, array) => {
 return pokemon.tipo === "grama"
}
const apenasPokemonsDeGrama = pokemons.filter(callback)



DIFERENÇAS ENTRE MAP E FILTER 

MAP : Cria um novo array com elementos modificados em relação ao original, com tamanho igual ao do original

FILTER: Cria um novo array com alguns elementos do original, com tamanho igual ou menor que o original


DIFERENÇA ENTRE OS MÉTODOS PUSH E  POP E COMO USÁ-LOS 


 O método pop() remove o último elemento de um array

 O método push(elemento) adiciona um ou mais elementos ao final de um array



MÉTODO SLICE DO ARRAY => Sintaxe, o que é e como usar

O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (

PARÂMETROS:

-slice(-2) extrai os dois últimos elementos do array.
-Se início for omitido, slice inicia a partir do índice 0.
-Se início for maior que o comprimento do array, é retornado um array vazio.
-slice(1,4) extrai do segundo até o quarto elemento (elementos de índice 1, 2 e 3).

retorna um novo array contendo os elementos extraídos sem alterar o array original


ex:


let frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga'];
<!-- alipcando o método do array  -->
frutas.slice(1, 3);
<!-- resultado -->
['Laranja','Limao']


MÉTODO SpLICE DO ARRAY => Sintaxe, o que é e como usar

O método splice(i, n) remove n elementos à partir da posição i do array

ex: 
const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
<!-- alipcando o método do array  -->
letras.splice(2, 1) 
<!-- resultado -->
["A", "B", "D", "G", "H"]



//PARTE 2 - HORA DE PRATICAR
Exercícios de fixação javascript



TREINO 1-


function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
const salario = 2000
const comissao = 100 
const porcentagem = 0.05
let valorDaComissao = (qtdeCarrosVendidos * comissao) + (valorTotalVendas * porcentagem)

const salarioMensal = salario + valorDaComissao

return salarioMensal
}

TREINO 2-


function calculaPrecoTotal(quantidade) {
 let valorMaca
  let calculo = valorMaca*quantidade
  if (quantidade <= 6 ) {
      calculo =1.30 * quantidade
   } else if (quantidade >= 12 ){
     calculo = 1.00 *quantidade
   }
    return calculo
  }



TREINO 3-


function calculaNota(ex, p1, p2) {
let  mediaPonderadaTotal= ((ex * 1) + ( p1 *2 ) + (p2 *3)) /6
let nota
if  (mediaPonderadaTotal >= 9) {
  nota ="A"
  } else if ((7.5 <= mediaPonderadaTotal )&&( mediaPonderadaTotal < 9)){
  nota ="B"
  } else if  ((6  <= mediaPonderadaTotal)&&(mediaPonderadaTotal< 7.5)){
  nota ="C"
  } else if (mediaPonderadaTotal < 6) {
   nota ="D"
  }
  return nota
  }


  TREINO 4- 

  function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    
 let numerosDeRepeticao = 0
    for ( let numero of arrayDeNumeros){
        if ( numero === numeroEscolhido){
            numerosDeRepeticao ++    }
        }
        if (numerosDeRepeticao >  0) {
        return `O número ${numeroEscolhido} aparece ${numerosDeRepeticao}x`
        }
        else  {
        return "Número não encontrado"
        }
    }


TREINO 5-


function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 const arrayNomes = animais.map((item) => {
 return item.nome 
})



TREINO6-

function filtraTarefas() {
  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 }
 ]

const novaArray = tarefas.filter((item, index, array) => {
return item.status === "done"
})
const nomeArray = novaArray.map((item) =>{
return item.titulo
})

return (nomeArray)
}






