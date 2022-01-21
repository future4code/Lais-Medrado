//  Para vermos todas as viagens
import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import TripItem from "./TripItem";

import axios from "axios";
import { useHistory } from "react-router-dom";

const ListContainer = styled.div `
padding: 8px;
`

function ListTripsPage() {
const history = useHistory();

const goBack =() => {
  history.goBack()
}


const goToForm =()=>{
history.push ("/form")


}

const [ tripsList, setTripsList] = useState ([])




    useEffect (() => {
      axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-medrado-joy/trips').then(response =>{
     
      setTripsList( response.data.trips) 
    })
}, []);


    return (
    
      <ListContainer> 

      {tripsList.map((trip) =>{
       return <TripItem trip={trip}  key={trip.id} />
       })}   

      <button onClick= {goBack}>Voltar </button>     
      <button onClick = {goToForm}>INSCREVER-SE</button>

      </ListContainer>

    )
    
    


  }


  export default ListTripsPage;
  