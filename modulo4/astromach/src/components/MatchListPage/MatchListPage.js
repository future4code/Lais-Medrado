import React from "react";
import MatchListItem from "./MatchListItem";
import  styled from 'styled-components'


const ListContainer = styled.div `
padding: 8px;

`
function MatchListPage () {
const matches = [

    {
      "id": "71gMbZs2txS9LDvGK5Ew",
      "age": 26,
      "name": "Anitta",
      "photo": "https://images.outgo.com.br/clients/1/events/2923/Anitta-Perfil-4-1.png",
      "bio": "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
    }
  ]


//cada match da minha lista vai gera r um match list item 
      //cad amatch é um profile

    return (
  
      <ListContainer> 
      
       {matches.map((profile) =>{
       return <MatchListItem profile={profile}/>
       })}
      </ListContainer>
    )
    
  }
  
  export default MatchListPage;
  