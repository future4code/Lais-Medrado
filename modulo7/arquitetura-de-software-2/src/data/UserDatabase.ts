import {User} from '../types/user';
import { BaseDatabase } from "./BaseDatabase";

//1-aqui criamos nossas querys e fazemos as conexões com o banco de dados
// o UserDatabase é uma classe que herda de BaseDatabase e 
//tem um método chamado getAll para retornar todos os usuários

//2- aqu vai acusar erro pq está faltando criar o tipo, daqqui eu vou criar a pasta type e criar os tipos

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";
// async create é um método que cria um usuário e salva no banco de dados e

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  //async getAll é um método que retorna todos os usuários do banco de dados em um array ;
  async getAll(): Promise<User[]> {
   
   
    const users = await UserDatabase.connection
    .select().from(UserDatabase.TABLE_NAME)

    return users
  }
}
