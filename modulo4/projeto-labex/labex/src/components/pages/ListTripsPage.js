//  Para vermos todas as viagens
import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import TripItem from "./TripItem";

import axios from "axios";
import { useHistory } from "react-router-dom";

const ListTripsPageContainer = styled.div `
    width:100%;
    height: 100vh;;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    justify-content:center;
    align-items:center;
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 400px;
    max-width: 500px;
   
    
    display:grid;
    
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: center;
    margin-inline-end: 0px;


`

function ListTripsPage() {
const history = useHistory();

const goBack =() => {
  history.goBack()
}


const goToForm =()=>{
history.push ("/form")


}

const [tripsList, setTripsList] = useState ([])




    useEffect (() => {
      axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-medrado-joy/trips').then(response =>{
     
      setTripsList( response.data.trips) 
    })
}, []);


    return (
    
      <ListTripsPageContainer> 

      {tripsList.map((trip) =>{
       return <TripItem trip={trip}  key={trip.id} />
       })}   

      <button onClick= {goBack}>Voltar </button>     
      <button onClick = {goToForm}>INSCREVER-SE </button>

      </ListTripsPageContainer>

    )
    
    


  }


  export default ListTripsPage;
  