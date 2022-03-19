
import React from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import { ScreenContainer } from "./styled";
import { Link } from "react-router-dom";
import { ProductScreen } from "../ProductScreen/ProductScreen";
import {useEffect, useState} from 'react';
import { renderIntoDocument } from "react-dom/test-utils";


///export nomeado 
//quando não tem chave na  importação você pode importar com qualquer nome ;
export const CartScreen = ({cart, setCart}) => {
const [ totalPrice, setTotalPrice] = useState (0);

const removeProduct =(product) =>{
const newCart = cart.filter (item => item.id !== product.id)
setCart(newCart)

}
useEffect(() => {
let price =0;
cart.forEach(item =>{
  price += item.price * item.quantity
});
setTotalPrice (price);
}, [cart]);


//o preço total começa em zero 
//E VAMOS QUERER ALTERAR O PREÇO ,TODA VEZ QUE O CARD FOR ALTERADO
//rodar uma função toda vez que alguma coisa roda no estado usa ro useEffect
//toda vex que o card é alterado , ele atualiza a tela

return (

    <ScreenContainer>
   {cart.map(item =>  <ProductItem item= {item} removeProduct={removeProduct}/>)} 
           
            <h1>Total: R${totalPrice},00</h1>
            
            <Link to='/products'>
            <button >Continuar Comprando</button>
            </Link>
            
    </ScreenContainer>


);
};

//ps para calcular o preço total precisamos de um algoritmo 







//um argumento dentro de uma função ,é criado uma
//inline function dentro da props
//, passando o argumento