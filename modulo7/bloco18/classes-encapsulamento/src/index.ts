import dotenv from "dotenv";
import knex from "knex";
import express from "express"
import cors from "cors"

export const app = express()

app.use(express.json())
app.use(cors())




dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});


// - Exercício 1
    
//  Analise a classe `UserAccount` abaixo. Perceba quais propriedades 
// são públicas e quais são privadas e responda as perguntas discursivas em comentários no arquivo `index.ts`
    
// a) *Para que serve o construtor dentro de uma classe e como 
// fazemos para chamá-lo?*

    // O construtor é uma função que é executada quando a classe é instanciada, ou seja defini um ou 
    //mais valores/ações padrões  para o objeto que forem instância de determinada classe;
    // para chamar o construtor, basta instanciar a classe, ou seja, criar um objeto da classe e 
    //então chamar ;



      //____________________________________________________     
    
    
// b) *Copie o código abaixo para o seu exercício de hoje; crie uma 
// instância dessa classe (dê o nome, cpf e idade que você quiser). 
// Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
    
  
//aqui no meu terminal aparece uma vez só
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    // private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }



// Objeto => instância criada apartir da Classe
const idoso: UserAccount = new UserAccount("78456987258", "Carlos", 65);

console.log (idoso)

// app.listen(3003, () => console.log("Servidos....."))




//___________________________________________________________________________________________

// c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*

//  criando   métodos para acessar essas propriedades, ex:
//  getCpf() retorna o valor da propriedade cpf
//  getName() retorna o valor da propriedad name
//  getAge() retorna o valor da propriedad age
//  getBalance() retorna o valor da propriedade balance

