//1-1. Crie um **tipo** para representar uma conta para o usuário

export  type UserAccount = {
    id: string,
    name: string,
    cpf: string,
    birthData: Date,
    balance: number,
    extrato: Array <UserExtrato> //array do type
}


//2-Crie um array global que armazene usuários na aplicação. Caso queira, 
//pode iniciar este array com valores pré-definidos.





// UserAcount.balance= 0


export  type UserExtrato = {
    value: number,
    date: Date,
    descrition: string
}

//possuindo o valor, a data e uma descrição