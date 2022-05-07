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





//1- 
//a) Explique como é a resposta que temos quando usamos o raw.

// raw é um dos métodos que o knex utilizq para acessar o banco de dados, raw(crú) , ele permite que a pessoa
//acesse os dados na sql , jogando os comandos exatamente como jogariamos no worbench, então podemos usa os comandos
//  dentro do raw, o connect vai passar p o workbench e fazer as querys, os pedidos p o banco de dados
//


//b) b) Faça uma função que busque um ator pelo nome;
  

        








const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
   });