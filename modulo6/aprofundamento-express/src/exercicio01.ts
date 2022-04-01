import express, { application, Request, Response } from 'express';
import cors from 'cors';
import { taskList} from './data';
import { AddressInfo } from "net";
import { v4 as generateId } from 'uuid';

const app = express();

app.use(express.json());
app.use(cors());

 //exercicio 01
app.get("/ping", (request: Request, response: Response) => {   
    console.log ("ok")       
    response.status(201).send("Pong! 🏓")

   
})






//- Exercício 4
    
// Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo 
// com um único status, ou seja, retorne ou afazeres concluídos ou somente os que ainda 
// estão em andamento.

//REQUSIÇÃO DE POSTS
app.get("/todos", (req: Request, res: Response) => {
  const taskStatus = taskList.filter((task) => {
      return task.completed === false
  })
  res.send(taskStatus)
})



app.get("/done", (req: Request, res: Response) => {
    const taskStatus = taskList.filter((task) => {
        return task.completed === true
    })
    res.send(taskStatus)
  })
//EXERCICIO05
// application.post('/todos, (req: Request')



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });;
  //EXERCICIO 6

  app.post('/todos', (req: Request, res: Response) => {
    const user = req.headers.authorization
    const taskName = req.body.title;
    if(!taskName){
      res.status(400).send("Favor informar nome da lista no body.")
      return
    }
    const statusTask = req.body.completed
    const newTask: any = {
      id: generateId(),
      userId: user,
      title: taskName,
      completed: statusTask
    }
    taskList.push(newTask)
    res.send('ok')
  })