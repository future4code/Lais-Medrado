import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { user } from "../types/user"




export class UserBusiness {
 
  //fazendo as validações do usuário  
  async create({ email, name, password }: any):Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }
//se as validações derem certo ele cria um id para o usuário

    const id = generateId()

    //depois de criar o id ele cria o usuário e salva no banco de dados, o UserDatabase é uma 
    //classe que herda de BaseDatabase e tem um método chamado createUser que recebe um objeto com os dados do usuário criado

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  async getAll(): Promise<user[]> {

    const userDatabase = new UserDatabase()

    // const result = await

    return userDatabase.getAll()
  }

}
