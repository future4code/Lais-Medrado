import  { Request, Response } from 'express';
import {v4 as generatedId} from "uuid";
import insertUser from '../data/insertUser';

// o bloco da função envolvido no try catch, que é o que será executado, é o que será executado caso não haja erro.
// o bloco do catch é o que será executado caso haja erro.

export default async function createUser(
    req: Request,
    res: Response
) {
 try   {
     //1-  valida as entradas da requisição 

      if(
         !req.body.name ||
         !req.body.nickname ||
         !req.body.email
      ) {
          res
          
           .status(400)
           .send("Preenchas os campos, 'name','nickName','email'");
      }
        
      
     //chamando  o banco de dados
     const id = generatedId();
     
     await insertUser (
         id,
        req.body.name,
        req.body.nickname,
        req.body.email
    );
      
     

     //repsonder a requisição 
    res 
        .status(200)
        .send("Usuário criado com sucesso!");


 } catch(error: any) {
    res.status(400).send({
        message:  error.message || error.sqlMessage

//erro for pelo sql , ele me retorna um sql message


    });
    }
}