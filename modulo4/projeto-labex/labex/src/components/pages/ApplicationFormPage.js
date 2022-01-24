//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import PerguntaOpcoes from "./PerguntaOpcoes";
import axios from "axios";
import styled from "styled-components";


const Form= styled.input `

width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 0px 0px 15px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 500px;


`


function ApplicationFormPage() {
const history = useHistory();

const goBack =() => {
  history.goBack()
}

const [ tripOption, setTripOption] = useState ([])


useEffect (() => {
  axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-medrado-joy/trips').then(response =>{
 
  setTripOption( response.data.trips)
})


}, []);


    return (
      <div>

       <h1>ESCOLHA SUA VIAGEM </h1>
      
        <PerguntaOpcoes titulo="viagens" itens={tripOption}/>
        
 
 
      
        <Form type= "text" placeholder = {"Nome"} />
        <Form type= "text" placeholder={"Idade"} />
        <Form type= "text" placeholder={"Texto de Candidatura"} />
        <Form type= "text" placeholder={"Profissão"} />
        
  <br/>
  <br/>
     
        <button onClick ={goBack}> voltar </button> 
        <button> enviar </button> 
      </div>
    );
  }
  

  export default ApplicationFormPage;
  

