import dotenv from "dotenv";

dotenv.config();



// - Exercício 1
    
//  Analise a classe `UserAccount` abaixo. Perceba quais propriedades 
// são públicas e quais são privadas e responda as perguntas discursivas em comentários no arquivo `index.ts`
    
// a) *Para que serve o construtor dentro de uma classe e como 
// fazemos para chamá-lo?*

    // O construtor é uma função que é executada quando a classe é instanciada, ou seja defini um ou 
    //mais valores/ações padrões  para o objeto que forem instância de determinada classe;
    // para chamar o construtor, basta instanciar a classe, ou seja, criar um objeto da classe e 
    //então chamar ;



           
    
    
// b) *Copie o código abaixo para o seu exercício de hoje; crie uma 
// instância dessa classe (dê o nome, cpf e idade que você quiser). 
// Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
    
  
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
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


// c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*