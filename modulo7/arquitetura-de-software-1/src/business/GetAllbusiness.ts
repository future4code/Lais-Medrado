import { UserDatabase } from "../data/UserDatabase";

export class GetAllbusiness


export class UserBusiness {

  async get(): Promise<user[]>  {
				
      return await userDatabase.get();
  }
}