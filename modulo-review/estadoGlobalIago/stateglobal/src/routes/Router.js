import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartScreen} from "../screens/CartScreen/CartScreen"
import { ProductScreen } from "../screens/ProductScreen/ProductScreen";
import { useState } from "react";

// o path indica no navegador o caminho que vai acontecer 
//vamos cria rum carrinho , e le vai ser um estado e uma array ;
//e como todo array ele deve começar vazio

// quando passa o productscreen, percebe-se que ele é uma função (um componente funcional), 
//daí agora para passar props para ele ,cria-se uma função dentro da função 
//que retorna o componente e pode passar props para ele
//no caso o setCart = {setCart} , é o argumento da função
//se eu recebo setCart no productScreen, eu tenho que ir na página dele e passar como props 
const  Router=() => {

const [ cart, setCart] = useState([]);


    return(
        <BrowserRouter>
            <Routes>
                <Route path='/products' element={()=>{<ProductScreen setCart={setCart} cart ={cart}/>}}/>
                <Route path='/cart' element={() => {<CartScreen cart={cart} setCart={setCart}/>}}/>
            </Routes>
          
        </BrowserRouter>
    )
}

export default Router