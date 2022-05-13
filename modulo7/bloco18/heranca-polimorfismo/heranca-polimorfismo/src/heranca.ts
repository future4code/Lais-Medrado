//1-a) não seria possível imprimir o password pois é uma propriedade privada , não tem o método get;
//1-b) Uma vez
//2-a) o oonstrutor da classe Customer foi chamado uma vez pois a classe foi instanciada uma vez;
//2-b) // o construtor da classe User foi chamado duas vezes, pois ao utilizar o extends da Classe User, também imprime o valor do constructor da mesma.

//3-a)Não, pois é um atributo privado, sem um getter public



 // Chamando o construtor da classe User foi chamado duas vezes, pois ao utilizar o extends da Classe User, também imprime o valor do constructor da mesma.
class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;
  constructor(id: string,email: string,name: string,password: string){
    // console.log("Chamando o construtor da classe User")
    this.id = id
    this.email = email
    this.name = name
    this.password = password
  }
  //MÉTODOS
  public getId(): string {
    return this.id
  }
  public getEmail(): string {
    return this.email
  }
  public getName(): string {
    return this.name
  }
  //4-  
  // public interoduceYourself(): string {
  //   return "Olá, bom dia!"

  //5-
  public introduceYourself(name: string){
    return `Olá, sou ${name}. Bom dia!`
  }
}
const user01 = new User('1', 'user01@gmail.com ', 'User01', 'kibe1234')
// console.log(user01);


//-------------------------------------------------------------------------

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;
  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    // console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }
  public getCreditCard(): string {
    return this.creditCard;
  }
}

// 3-a
const customerB = new Customer('2', 'customerb@email.com.br', 'jose', '58963', '56')
console.log(customerB);
//customerB.introduceYourself()




export interface Client {
  name: string;
  // Refere-se ao nome do cliente
  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
  // como se fosse um id
  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês
  // calculateBill(): number{
  //   console.log(2);
  // }
}
export class Cliente implements Client {
  name: string;
  constructor(name:string){
    this.name
  }
}