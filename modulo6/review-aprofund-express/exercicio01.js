"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//exercicio 01 _ search playlist
// observações : autenticação, passar o header que tem alguma informação do usuário 
// obs 02 : envia um authorization e depois pega o token ;
// https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=string => o name=string é um
// path params 
// então é buscar uma playlist específica de um usuário específico:
// primeira coisa , identificar usuário 
//se eu vou coloca ro usuário nos headers, tenho que colocar ele na função 
app.get('/playlists/search', (request, response) => {
    console.log(request.headers);
});
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
;
