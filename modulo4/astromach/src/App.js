import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"


const Tela = styled.div `

display: flex; 


justify-content: center;

height: 100vh;
width: 30%vw;
`

const Header = styled.div`

`


const Tela1 = styled.div `
display: flex;
flex-direction: column;
left: 50%;
border-width: .1px;
border-style: solid;
border-color: black;
background-color: lightgreen;

height: 100%;
width:35em;
`



const CardContainer = styled.div `

border-width: .1px;



flex-direction: column;
justify-content: center;



`

const Footer = styled.div `
display:flex;
flex-direction: column;
position: absolute;
bottom: 0;
width:35em;

    




`


function App() {

  return (

    <Tela>
    <Tela1>
    <Header>
tinder wap
icon
lista de curtidos
</Header>

<CardContainer>
  
</CardContainer>
 
   



   <Footer>
<button> não pegável </button>
<button> pegável</button>
</Footer>



    </Tela1>




     </Tela>
  )
  
}

export default App;
