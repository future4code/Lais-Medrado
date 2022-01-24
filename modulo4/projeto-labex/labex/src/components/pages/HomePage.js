// Para o usuário escolher entre Área Administrativa e Lista de Viagens
import React from "react";
import styled from 'styled-components'


import { useHistory } from "react-router-dom";

// estilização 

const HomePageContainer = styled.div `

/* margin-left: 30%;
padding-top: 20%; */
/* border: 1px solid black; */
/* flex-direction: column; */
/* align-items: center; */
margin-top: -18em;
width: 100%;
height: 100vh;

`
const TituloContainer = styled.div `
display: flex;
align-items:center;

justify-content:center;
margin-top: 2.2em;
font-family:candara;
font-size: 8em;
color: red;

`

const SubTitulo = styled.div `
display: flex;
align-items:center;
justify-content:center;
margin-top: 2em;
font-family:candara;
font-size: 2em;
color: red;

`


const Botao = styled.button `
display: inline-grid;
justify-content:center;

align-self: center;
justify-self: center;
width:15em;
height:5em;
margin-top:3em; 
margin-left: 25em;
align-items: center;

	/* grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 50px; */
/* align-content: stretch
align-content: center;
 grid-template-columns: 100px 100px;
 row-gap:50px;
 align-content: space-evenly; */

color:green; 
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
     <div>
<HomePageContainer>

<TituloContainer>Labex</TituloContainer>
<SubTitulo>Viagens Espaciais</SubTitulo>


 

     
       <Botao onClick= {goToListTripPage}> VER VIAGENS </Botao>
       <Botao onClick = {goToAdm}> ÁREA DA ADM </Botao>
       </HomePageContainer>
       </div>
    )
    
    }

  export default HomePage;

