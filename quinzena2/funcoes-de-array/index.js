
//EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

//Tente responder os exercícios dessa seção sem executar o código. 
//Se ficar muito difícil, pode rodar no seu computador **para analisar e 
//pensar sobre o resultado.


//1- LEIA O CÓDIGO ABAIXO

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })



//resposta:

  //para cada um dos elementos na lista de usuário ele está retornando 
  //o item, o índice do elemento  e o array original. Será impresso:


//   item:                                                 índice:                array:
//           {nome: "Amanda Rangel", apelido: "Mandi" }             0         devolde o array original
//          { nome: "Laís Petra", apelido: "Laura" }                1
//          { nome: "Letícia Chijo", apelido: "Chijo" }             2




//2-


// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
//    return item.nome
// })

// console.log(novoArrayB)



// //vai ser impresso no console uma nova lista ,apenas com o nome dos usuários
// // já que o que foi solicitado para retornar foi : item.nome



// // [Amanda Rangel, Laís Petra, Letícia Chijo]



//3-

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//    return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)


//resposta:

// //Eu pensei que vai ser filtrado da lista o apelido  " Chijo" , então vai ser impresso
// a lista com todos os nomes e quase todos os apelidos com excessão de "Chijo",
// porém quando coloco pra rodar , está filtrando o nome e apelido de "Chijo" .



//EXERCÍCIO DE ESCRITA DE CÓDIGO

//Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
//realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:


// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]



 //a) Crie um novo array que contenha apenas o nome dos doguinhos


//  const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]


// const novoArrayNomes = pets.map((item, index, array) => {
//    return item.nome
// })

// console.log(novoArrayNomes)







 //b) Crie um novo array apenas com os cachorros salsicha


//   const pets = [
//         { nome: "Lupin", raca: "Salsicha"},
//         { nome: "Polly", raca: "Lhasa Apso"},
//         { nome: "Madame", raca: "Poodle"},
//         { nome: "Quentinho", raca: "Salsicha"},
//         { nome: "Fluffy", raca: "Poodle"},
//         { nome: "Caramelo", raca: "Vira-lata"},
//      ]
    
    
//     const novoArraySalsicha = (item) => {
//        return item.raca === "Salsicha"
//     }
    
//     const racaSalsicha = pets.filter (novoArraySalsicha)
//     console.log(racaSalsicha)
    




//  c) Crie um novo array que possuirá mensagens para enviar para todos os clientes 
//  que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"


    // const pets = [


    //         { nome: "Lupin", raca: "Salsicha"},
    //         { nome: "Polly", raca: "Lhasa Apso"},
    //         { nome: "Madame", raca: "Poodle"},
    //         { nome: "Quentinho", raca: "Salsicha"},
    //         { nome: "Fluffy", raca: "Poodle"},
    //         { nome: "Caramelo", raca: "Vira-lata"},
    //      ]
        
        
    //     const novoArrayPoodles = (item) => {
    //        return item.raca === "Poodle"
    //     }
        
    //     const racasPoodles = pets.filter (novoArrayPoodles)
    // //   console.log(racasPoodles)

    //     const pegarNome = (item) => {
    //        console.log ("Você ganhou um cupom de desconto de 10% para tosar o/a", item.nome)
    //     }

    //     const nomeDosPoodles = racasPoodles.map(pegarNome)


        // return 

        // console.log ("Você ganhou um cupom de desconto de 10% para tosar o/a", nomeDosPoodles)
        


        //2 -Dado o seguinte array de produtos, realize as operações pedidas 
        //nos itens abaixo utilizando as funções de array map e filter:

        // const produtos = [
        //     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        //     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        //     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        //     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        //     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        //     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        //     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        //     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        //     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        //     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
        // ]


    
//a) Crie um novo array que contenha apenas o nome de cada item


//         const produtos = [
//             { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//             { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//             { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//             { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//             { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//             { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//             { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//             { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//             { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//             { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//         ]


// const novoArrayNomes = produtos.map((item, index, array) => {
//    return item.nome
// })

// console.log(novoArrayNomes)





//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 
//5% de desconto em todos eles



//         const produtos = [
//             { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//             { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//             { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//             { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//             { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//             { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//             { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//             { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//             { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//             { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//         ]


// const nomePreco = produtos.map((item, index, array) => {

//    const novoValor = (item.preco * 0.95)
//    const resultado = {
//        nome: item.nome,
//        preco : novoValor
//    }

//    return resultado
// }
// )

// console.log (nomePreco)








// //c)Crie um novo array que contenha apenas os objetos da categoria Bebidas

//         const produtos = [
//             { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//             { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//             { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//             { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//             { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//             { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//             { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//             { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//             { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//             { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//         ]


// const novoArrayBedidas = (item) => {
//    return item.categoria === "Bebidas"
// }

// const bebidas = produtos.filter(novoArrayBedidas)
// console.log(bebidas)



    





//d)Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"


        // const produtos = [
        //     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        //     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        //     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        //     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        //     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        //     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        //     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        //     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        //     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        //     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
        // ]


// const novoArrayYpe= (item) => {
//    return item.nome === "Ypê"
// }

// const ype = produtos.filter((item,index,array) => {
//     return  item.nome.includes ("Ypê")
    
// })
// // console.log(ype)





//e)Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array 
//deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"




// const novoArrayYpe= (item) => {
//     return item.nome === "Ypê"
//  }
 
//  const ype = produtos.filter((item,index,array) => {
//      return  item.nome.includes ("Ypê")
//  })
 
// const frase = ype.map ((item) => {

//   return ("compre" +" "+ item.nome +" " + "por" +" "+ item.preco +" "+ "!")
// })

// console.log (frase)



