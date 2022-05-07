import knex from "knex";

export const connection = knex({
	client: "mysql",
	connection: {
    host: "35.226.146.116",
    port: 3306,
    user:"419749-lais-silva",
    password: "#qC8RCZqo2~@eIBKASeq",
    database:"joy-419749-lais-silva"
  }
});
