//1-1. Crie um **tipo** para representar uma conta para o usuário

export  type UserAccount = {
    name: string,
    cpf: number,
    birthData: number,
    balance: number,
    extrato: number [] 
}


//2-Crie um array global que armazene usuários na aplicação. Caso queira, 
//pode iniciar este array com valores pré-definidos.
type ArrayUsers = UserAcccount[]


UserAcount.balance= 0


export  type UserExtrato = {
    value: number,
    date: number,
   descrition: string
}

//possuindo o valor, a data e uma descrição