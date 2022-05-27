import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

//o  BaseDatabase é uma classe que tem um método chamado connection, 
//que retorna uma conexão com o banco de dados

export class BaseDatabase {

   protected static connection = knex({
      client: 'mysql',
      connection: {
         host: process.env.DB_HOST,
         user: process.env.DB_USER,
         password: process.env.DB_PASSWORD,
         database: process.env.DB_SCHEMA,
         port: 3306,
         multipleStatements: true
      }
   })

}

