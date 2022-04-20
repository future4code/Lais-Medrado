// no index.ts:
import express, { Request, Response, Express } from "express";
import { connection } from "./coneection";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();



const app: Express = express();
app.use(express.json());
app.use(cors());





//1- a) Explique como é a resposta que temos quando usamos o raw.

// raw é um dos métodos que o knex utilizq para acessar o banco de dados, raw(crú) , ele permite que a pessoa
//acesse os dados na sql , jogando os comandos exatamente como jogariamos no worbench, então podemos usa os comandos
//  dentro do raw, o connect vai passar p o workbench e fazer as querys, os pedidos p o banco de dados
//


app.get("/actor", async (req: Request, res: Response): Promise<void> => {
   try {
     // usando o método raw
     //    const result =  await connection.raw(`
     //         SELECT * FROM Actor
     //     `)
 
     // usando o query builder
     const result = await connection("Actor");
     // const result = await connection("Actor").select() // funciona igualmente
 
     res.status(200).send(result);
   } catch (error: any) {
     res.status(500).send(error.sqlMessage || error.message);
   }
 });
 

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});