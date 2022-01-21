//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import React from "react";

import { useHistory } from "react-router-dom";

function ApplicationFormPage() {


const history = useHistory();

const goBack =() => {
  history.goBack()
}



    return (
  
      <div> 
          <button onClick = {goBack}>VOLTAR</button>
          <button>ENVIAR</button>
          
      </div>
    )
    
  }
  
  export default ApplicationFormPage;
  

