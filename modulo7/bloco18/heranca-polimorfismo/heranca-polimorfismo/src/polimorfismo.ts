//Polimorfismo**

//Para o exercício de prática de polimorfismo vamos fazer um sistema 
//para auxiliar o cálculo de contas de energia elétrica para uma concessionária 
//famosa. Basicamente, o custeamento depende do tipo do cliente. O valor base de 
//cada kWh (unidade de consumo de energia) é R$0.75. O **Cliente Residencial** 
//paga a tarifa cheia (ou seja, R$0.75). O **Cliente Comercial** possui um desconto 
//de 30% do valor total (ou seja, paga R$0.53). Por fim, para o **Cliente Industrial,** 
//há um desconto de 40% do valor total (ou seja, paga R$0.45) mais um valor fixo 
//de R$100,00 por máquina usada na fábrica.
//Já deixamos prontos 5 entidades desse sistema: **Place**, **Client**, **Industry**, **Commerce** e **Residence**.


//- Exercício 1
    
//Vamos começar analisando a **interface** Client. Ela possui 4 atributos explicados abaixo.

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }


//Comece criando um objeto dessa interface, colocando a tipagem correta. 
//Perceba que você terá que dar uma implementação para o método `calculateBill()`. 
//Por enquanto, implemente de tal forma que sempre retorne `2` (ou qualquer outro 
//número). Imprima todas as informações que forem possíveis no terminal.


//a) *Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? 
//Por que isso aconteceu?*

//R- 
   //name: 'Goli',
   //registrationNumber: 1,
   //consumedEnergy:
//calculateBill não foi impresso pois não foi implementado na interface 

//criando um objeto da interface 

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    // calculateBill: function () {
    //     return 2;
    // }
     calculateBill: () => {
       return 2;
     }
    
  }
  console.log (client)