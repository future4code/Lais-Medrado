
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {

    return `No comparador de igualdade ${a}===${b} é ${a === b}`
}
console.log(checarIgualdade(1, 2));


// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior (a, b) {

    return `No comparador de verificar qual é o maior  ${a}> ${b} é ${a > b}` }

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= true
// b-) 1=='1'= false
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------


const cadastro = () => {
  
    let nomeDoUsario = prompt (" Digite aqui seu nome:")
    let anoDeNascimento = Number (prompt(" Digite aqui seu ano de nascimento:"))
    let senhaDoUsuario = prompt ("Digite aqui uma senha com no mínimo 6 caracteres:")
    let nacionalidade = prompt ( " Digite aqui sua nacionalidade:")
    let numeroMinimodeCarac = 6
  
  
    const usuario = []
  
     usuario.push(nomeDoUsario)
     if (anoDeNascimento <= 2002 ) {
     usuario.push(anoDeNascimento)
     }else if  (anoDeNascimento > 2002 ) {
    console.log("Lamento, mas vocês não temidade suficiente")
     }else if((senhaDoUsuario.length) >= (numeroMinimodeCarac ) ) {
    usuario.push(senhaDoUsuario)
     } else if (senhaDoUsuario.length < numeroMinimodeCarac )  {
    console.log("Digite novamente uma senha com no mínimo 6 caracteres:")
     } else if ( nacionalidade === "Brasileira"){
     usuario.push(nacionalidade)  
     } else if (nacionalidade !== "Brasileira") {
     console.log("Lamento, somente pessoas com a nacionalidade Brasileira")
     }
  
    console.log  (usuario)
  
    }
  
  cadastro();




   ou _____________________


   const cadastro = () => {
  
    let nomeDoUsuario = prompt (" Digite aqui seu nome:")
    let anoDeNascimento = Number (prompt(" Digite aqui seu ano de nascimento:"))
    let senhaDoUsuario = prompt ("Digite aqui uma senha com no mínimo 6 caracteres:")
    let nacionalidade = prompt ( " Digite aqui sua nacionalidade:")
    let numeroMinimodeCarac = 6
  
  
    const usuario = []
  
     
  
     if ((anoDeNascimento <= 2002 ) && (senhaDoUsuario.length >= numeroMinimodeCarac ) && ( nacionalidade === "Brasileira")){
     usuario.push( nomeDoUsuario, anoDeNascimento, senhaDoUsuario,nacionalidade)
  
     
    }
  
    console.log (usuario)
  
  }
  
  cadastro()



// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
   
    let digitarSenha= prompt ( "Digite aqui sua senha:")
    let senhaCadastrada = "labenu"
    
   
    
    if (digitarSenha === senhaCadastrada){
      console.log ("Usuário Logado") 
    }else  {
      console.log ("Senha Inválida") 
    }
    
    }
  

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {
let nome = prompt ("Digite aqui seu nome:")
let vacina = prompt ("Digite o nome da vacina que tomou contra o covid:")
let tempo 
let diaQueTomouVacina= ("Digite a data que você tomou a primeira dose:" )
let data = diaQueTomouVacina + tempo

if ( vacina === "coronavac"){
 tempo = "28 dias"
} else if (vacina === "astrazenica") {
 tempo = "90 dias"
} else if (vacina === "pfizer") {
 tempo = "90 dias"
}   
 
console.log (`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)
}


console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {

    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    
   for ( let pessoasVacinadas of usuarios)  {
    usuarios.imunizacao = "incompleta"
    
    }
    pessoasVacinadas.push(usuarios)
}


    
    
   console.log (nomeDoUsario())

    





    // for ( const )
    // const novoArray = usuarios.map ((item) =>{
    // return item.imunizacao === "completa"
    // })
    // return novoArray
    // }
    // console.log(segundaDose("Barbara"))

    let 




// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui





    

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {
    //  Sua lógica aqui
}
console.log(cadastro());

const login = () => {
    //  Sua lógica aqui
}
console.log(login());

const primeiraDose = () => {
//  Sua lógica aqui
}
console.log(primeiraDose())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados());