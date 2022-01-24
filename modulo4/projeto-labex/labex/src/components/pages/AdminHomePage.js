// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import { useHistory } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import TripItem from "./TripItem";
import CardTrip from "./CardTrip";



const AdminHomePage = () =>{
  const history = useHistory();

  const goBack =() => {
    history.goBack()
  }
  
  const goToForm =() => {
    history.push ("/log")

  }

  const [ listAdm, setListAdm] = useState ([])

  useEffect (() => {
    axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-medrado-joy/trip/NoIFVcOiSgTKTIPVZwXS').then(response =>{
   
    setListAdm(response) 
  })
}, []);



    return (

      <div> 

      {listAdm.map((trip) =>{
        return <TripItem trip={trip}  key={trip.id} />
        })}   
 

    
      

       PAINEL ADMINISTRATIVO 
      {listAdm.map((trip) =>{
       return <CardTrip trip={trip}  key={trip.id} />
       })}   

      <button onClick= {goBack}>Voltar </button>     
      <button onClick = {goToForm}>INSCREVER-SE</button>

      
      </div>
    )
    
  }


export default AdminHomePage;