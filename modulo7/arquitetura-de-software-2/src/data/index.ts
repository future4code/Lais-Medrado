
import {app} from "../app"

import {userRouter} from "../routes/userRouter"

//1- começo aqui, o app.use é um middleware, que é um metodo que vai interceptar 
//todas as requisições que chegam no servidor

//2- ele está chama o router, como não tenhor, irei criar um router na pasta routes



app.use("/user", userRouter)