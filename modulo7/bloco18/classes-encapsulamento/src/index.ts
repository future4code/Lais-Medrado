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
    private transactions: Transaction[] = []; // array de transações que 
    //serão adicionadas ao array de transações do objeto
    //
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

    public getCpf= () => console.log(this.cpf);
    public getName= () => console.log(this.name);
    public getAge= () => console.log(this.age);
    public getBalance= () => console.log(this.balance);
    public getTransactions= () => console.log(this.transactions);


    }
  
  



// Objeto => instância criada apartir da Classe
const felipe : UserAccount = new UserAccount("78456987258", "Carlos", 65);

console.log (felipe)

// app.listen(3003, () => console.log("Servidos....."))




//___________________________________________________________________________________________

// c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*

//  criando   métodos para acessar essas propriedades, ex:
//  getCpf() retorna o valor da propriedade cpf
//  getName() retorna o valor da propriedad name
//  getAge() retorna o valor da propriedad age
//  getBalance() retorna o valor da propriedade balance



//exercicio 02 



// Transforme a variável de tipo abaixo, chamada Transaction em uma 
// classe Transaction. Ela deve conter as mesmas propriedades: 
// data, valor e descrição. Agora, porém, todas elas devem ser
// privadas. Portanto, crie métodos (getters) para a leitura desses
// valores, tanto para essa classe quanto para a classe UserAccount. 
// Crie uma instância dessa classe e adicione à instância 
// já criada de UserAccount 

class Transaction {

      private data: Date;
      private value: number;
      private description: string;

      constructor(data: Date, value: number, description: string) {
      this.data = data;
      this.value = value;
      this.description = description;
  
}

      public getData = () => console.log(this.data);
      public getValue = () => console.log (this.value);
      public getDescription = () => console.log  (this.description)
}

const deposito : Transaction = new Transaction(new Date(), 100, "Deposito")


// adicionando a transação ao array de transações do objeto felipe



//EXERCICIO 03

// Crie uma classe Bank, que será responsável por guardar todos os dados da aplicação. 
// Ela deve possuir a propriedades accounts, privada (crie os getters e setters 
// que achar apropriado


class Bank {

      private accounts: UserAccount[] = [];

      constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
  
}
     public getAccounts = () => console.log(this.accounts);
     public setAccounts =() => console.log(this.accounts);
}

 