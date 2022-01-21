// Para o usuário escolher entre Área Administrativa e Lista de Viagens
import React from "react";
import styled from 'styled-components'


import { useHistory } from "react-router-dom";





const HomePageContainer = styled.div `
display: flex;
margin-left: 30%;
padding-top: 20%;
border: 1px solid black;
flex-direction: column;
align-items: center;
width: 400px;
height: 100vh;
`

const ButtonHomePageContainer = styled.div `
display: flex;
padding: 0 10%;
align-items: center;

`
 const HomePage = () => {
  const history = useHistory();

//essa função direciona o usuário para a página 
const goToListTripPage = () => {
  history.push("/listtrip");
};


const goToAdm = ()=> {
  history.push ("/admn")
}



    return (
     
<HomePageContainer>

LABEX



      <ButtonHomePageContainer>
     
       <button onClick= {goToListTripPage}> VER VIAGENS </button>
       <button onClick  = {goToAdm}> ÁREA DA ADM </button>
      </ButtonHomePageContainer>

      </HomePageContainer>
    )
    
    }

  export default HomePage;

