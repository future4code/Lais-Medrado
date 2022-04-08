console.log('Hello World');

const nome: string = "Nome";

let age: number = 9;

// age = 'Oi';

const number = 1;
const number1 = 2;


// const myArray: string[] = ""
// const myArray: string[] = []
// const myArray: string[] = [1,2,3]
const myArray: string[] = ["String", /*9,*/ " "]
// myArray.push(9)

const myObj: { nome: string, idade: number } = {
    nome: "Nome",
    idade: 8
}
// myObj.atributo = 9;

const idade = myObj.idade;

let myVar: any = 7;
myVar = "Oi";
myVar = [];

function myFunction(myString?: string, myNumber?: string): number {
    return 9;
}

const minhaFuncao: (myString: string) => number = (myString) => {
    return 7
}

const returno = myFunction("myString")
myFunction("Olá");
myFunction("Olá", "9");

// Exercício