import express, { Request, Response } from 'express';
import { users, USER_ROLES , User} from './data';
import { AddressInfo } from "net";
import { v4 as generateId } from 'uuid';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());




//1-- **Exercício 1**
    
//Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. 


  app.get("/users", (request: Request, response: Response) => {
    try {
        
        const result =  users.map((user)=>{
         return user
         })
           if (!result.length) {
               response.statusCode = 404
               throw new Error("Não existe usuário");
               
           }
         response.status(201).send(result)
    } catch (error:any) {
        response.send(error.message)
    }
  })
  

//   - **Exercício 2**
    
//   Agora, vamos criar um novo endpoint, que busque todos os usuários 
//   que tenham uma propriedade `type` específica, recebendo apenas 
//   um `type` por vez. Após isso, responda:
  
//   *a.* Como você passou os parâmetros de type para a requisição?
//    Por quê?
  
//   b. Você consegue pensar em um jeito de garantir que apenas 
//   `types` válidos sejam utilizados?

app.get("/users/type", (request: Request, response: Response) => {

    try {
       const type = request.query.type
      
           if(USER_ROLES.ADMIN === type || USER_ROLES.NORMAL === type ) {
            const result = users.filter((user) => user.type === type )
              response.statusCode = 200
              response.send(result)
            } else {
             response.statusCode = 404 
             throw new Error("type não existe");
             
            
            }


    } catch (error:any) {
        response.send(error.message)
    }
  })





//   - **Exercício 3**
    
//   Vamos agora praticar o uso de buscas mais variáveis. 
//   Faça agora um endpoint de busca que encontre um usuário 
//   buscando ****por **nome**.
  
//   *a. Qual é o tipo de envio de parâmetro que costuma ser 
//   utilizado por aqui?*

  
//   b. Altere este endpoint para que ele devolva uma mensagem de 
//   erro caso nenhum usuário tenha sido encontrado.



app.get("/users/name", (request: Request, response: Response) => {
    let errorCode = 400;
    try {
      const name: string = request.query.name as string;
  
      const user: User | undefined= users.find((user) => user.name === name);
  
      if (!user) {
        errorCode = 404; // not found
        throw new Error("User not Found");
      }
  
      response.status(200).send({ user });
    } catch (error: any) {
      response.status(errorCode).send(error.message);
    }
  });


//- **Exercício 4**
    
// Fizemos algumas buscas no nosso conjunto de itens, agora é hora de
//  **adicionar** coisas. Comecemos criando um usuário na nossa lista. Crie um 
//  endpoint que use o método `POST` para adicionar um item ao nosso conjunto de usuários.
    
// a. Mude o método do endpoint para `PUT`. O que mudou?

app.post("/users/newuser", (req: Request, res: Response) => {
    let errorCode = 400;
    try {
      const { id, name, type, email, age }: User = req.body;
  
      if (!id || !name || !type || !email || !age) {
        errorCode = 422;
        throw new Error("One or more fields are empty");
      }
  
      const newUser: User = {
        id,
        name,
        type,
        email,
        age,
      };
  
      users.push(newUser);
  
      res.status(200).send(users);
    } catch (error: any) {
      res.status(errorCode).send(error.message);
    }
  });
  
 

// a. Mude o método do endpoint para `PUT`. O que mudou?

//PUT para modificar completamente um recurso existente;


app.put("/users/modification, (req: Request, res: Response) => {
    let errorCode = 400;




const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;