// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import React from "react";
import { useHistory } from "react-router-dom";


const AdminHomePage = () =>{
  const history = useHistory();

  const goBack =() => {
    history.goBack()
  }
  
  const goLogin =() => {
    history.push ("/log")


  

  }
    return (
  
      <div> 
      <button onClick={goBack}> VOLTAR </button>
      <button onClick ={goLogin}> ENTRAR</button>
      <button> CRIAR VIAGEM  </button>
      <button> LOGOUT </button>
      

      </div>
    )
    
  }


export default AdminHomePage;