// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import React from "react";


function AdminHomePage() {

    return (
  
      <div> AdminHomePage
      <BUTTON>VOLTAR onclick = {HomePage}</BUTTON>
      <BUTTON>ENTRAR</BUTTON>
      <BUTTON>CRIAR VIAGEM onclick= {CreateTripPage} </BUTTON>
      <BUTTON>LOGOUT onclick {LoginPage}</BUTTON>
      <LoginPage/>
      <TripDetailsPage/>

      </div>
    )
    
  }
  
  export default AdminHomePage;
  