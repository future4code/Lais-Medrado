import React from "react";
import { ButtonContainer } from "./styled";
import { Link } from "react-router-dom";



const CartButton = () =>{


 
      
    return (
        <Link to= "./products">
          <ButtonContainer >
            <span role="img" aria-label="carrinho" >
              🛒
            </span>
          </ButtonContainer>
          </Link>
        );
      };
      
    export default CartButton;
      

