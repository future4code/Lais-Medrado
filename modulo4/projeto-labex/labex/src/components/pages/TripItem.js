import React from 'react';
import styled from 'styled-components';

const ListItemContainer = styled.div `
display: flex;
justify-content:center;
align-items: center;
border-bottom: 1px solid gray;


color: rgb(57, 65, 69);
    font-family: Open-Sans, Helvetica, sans-serif;

`



function TripItem (props) {
  

    return (
  <ListItemContainer>
  {/* <p>{props.trip.id}</p> */}
  <p>{props.trip.name}</p>
  <p>{props.trip.description}</p>
  <p>{props.trip.planet}</p>
  <p>{props.trip.durationInDays}</p>
  <p>{props.trip.date}</p>
 <hr/>



   </ListItemContainer>
  
    )
    
  }
  
  export default TripItem;
  