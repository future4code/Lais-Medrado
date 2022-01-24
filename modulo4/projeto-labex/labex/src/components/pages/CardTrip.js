import React from 'react';
import styled from 'styled-components';

const CardTripContainer = styled.div `
display: flex;
align-items: center;
border-bottom: 1px solid gray;
`



function CardTrip(props) {
  

    return (
  <CardTripContainer>
 
  <button>{props.trip.name}</button>
  
   </CardTripContainer>
  
    )
    
  }
  
  export default CardTrip;
  