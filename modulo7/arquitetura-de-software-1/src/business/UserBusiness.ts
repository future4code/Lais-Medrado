import { v4 as generateId } from "uuid";
import { UserDatabase } from "../data/UserDatabase";

// é tudo que que vai ser verificado na requisição do body , toas as regras de negócio!
//todas as operações devem ser feitas no business

export class UserBusiness {
public createUser = async (input: any) => {
   try {
     const { name,  email, password } = input;
 
     if (!name || !email || !password) {
       throw new Error(
         'Preencha os campos "name","nickname", "email" e "password"'
       );
     }
 
     const id: string = generateId();
 
     const userDatabase = new UserDatabase();
     await userDatabase.insertUser({
       id,
       name,
       email,
       password,
     });
   } catch (error: any) {
     throw new Error(error.message);
   }
 };

}

