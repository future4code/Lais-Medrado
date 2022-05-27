import { UserDatabase } from "../data/UserDatabase";

export class GetAllbusiness


export class UserBusiness {

  async get(): Promise<user[]> {
    const userDatabase = new UserDatabase();
    const users = await userDatabase.getAll();
    return users;

    
}