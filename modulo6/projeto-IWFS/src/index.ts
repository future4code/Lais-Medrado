import express, { Request, Response } from 'express';
import { AddressInfo } from "net";
import { UserAccount, UserExtrato} from './data';
import { v4 as generateId } from 'uuid';

import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json());

const users : UserAccount[] = [
  {
      id: "ajdfaef22-vefvg3og-fvefvdfv3-fv8rg3g", // hash
      name: "Lais Medrado",
      cpf: "547.456.589-85",
      birthData: new Date("1994-03-01"),
      balance: 0,
      extrato: []
  }
]

//get
// Crie um endpoint  que utilize o método POST da entidade users que será 
// responsável por cadastrar um usuário em um array de usuários. Neste momento, 
// não se preocupe, com as validações descritas nas funcionalidades.

app.post("/user", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const user : UserAccount = req.body;
    
    user.id = generateId();
    user.balance = 0;
    user.extrato = [];
    users.push(user);
    console.log(users);
    res.status(200).send(user);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});


app.get("/user", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    res.status(200).send(users);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});













const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;