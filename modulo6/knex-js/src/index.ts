// no index.ts:

import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();



const app: Express = express();
app.use(express.json());
app.use(cors());






//1- a) Explique como é a resposta que temos quando usamos o raw.

// raw é um dos métodos que o knex utilizq para acessar o banco de dados, raw(crú) , ele permite 
//



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});