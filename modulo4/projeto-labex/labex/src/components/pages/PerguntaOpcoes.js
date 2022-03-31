import React from "react";
import styled from "styled-components";


const Select = styled.select`
    width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    margin: 0px 0px 15px;

`
function PerguntaOpcoes (props) {
  return (


    <div>
     {/* {props.titulo} */}
      <Select > 
      <option value="" > selecione </option> 
        {props.itens.map((item) => {
        return  <option value={item.id} >{item.name} </option> 
        }
        )};
        
      </Select>

    </div>
  )     
}

export default  PerguntaOpcoes;

