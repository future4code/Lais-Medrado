import express from 'express'
import { UserController } from '../controller/UserController'

export const userRouter = express.Router()

const userController = new UserController()


//1- aapós criar as rotas está acusando falta dos métodos, vou criar eles
// no DataBase
userRouter
  .post("/", userController.create)
  .get("/", userController.getAll)
