import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

//no UserController, importamos o UserBusiness para usar o método createUser , ele faz a chamada do método createUser
// no contoller vem as responses, que são as respostas do usuário
// 
export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      const userBusiness = new UserBusiness();
      await userBusiness.create({ email, name, password });

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });

    } catch (error:any) {
      res.status(400).send(error.message);
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const userBusiness = new UserBusiness();
      const result = await userBusiness.getAll()

      res.status(201).send(result)
    } catch (error:any) {
      res.status(400).send(error.message);

    }
  }
}