import React from "react";
import { Link } from "react-router-dom";
import CartButton from "../../components/CartButton/CartButton";
import { ScreenContainer } from "../CartScreen/styled";
import useRequestData from '../../hooks/useRequestData';
import ProductCard from "../../components/ProductCard/ProductCard";


///export nomeado 
//quando não tem chave na  importação você pode importar com qualquer nome ;

 export const ProductScreen = ({setCart, cart }) => {
      const [data] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products');
      //criando função para adicionar produto no carrinho
      //essa função vai receber um product
      //e como que faz pra adicionar um produto novo numa array que é um estado? push (add elemento novo numa array)
      // spread operator , para pegar o que havia na array
      //como eu vou adicionar um produto novo nesse array, eu vou precisar do estado antigo (o cart) para
      // copiar a array e fazer o push do produto novo e setar essa array modificad ano estado 
     

// find index..recebe uma callback e devolve um inidice, ela pega o id desse item e compara com o id do produto que foi passado por função
//
      const addProductToCart = (product) => {
        // setCart([...cart, product])
        const newCart = [...cart];
        const index = cart.findIndex(item => item.id === product.id);
        //(product) é o produto novo
            //esse produto em que ser adicionado com uma quantidade
            //se o index for menos 1 ...é pq ele não existia lá ,dái ele é 1 de quantidade
        if(index === -1) {
          newCart.push({ ...product, quantity: 1});
        } else {
          //se eu encontrei o produto eu aumentei a quantidade dele
          newCart[index].quantity++;
        }
        setCart(newCart);
      }
      //com essa nova array eu dou o setCart
            

   

//o productCard precisa receber a função pq  precisa associar a função ao botão

//_________________________________________

  //para o product card vai ter que ser passado props, para ele poder receber qlqr produto 
  // lembra rque o product card não tava preparado para receber uma props então temos que ir nele organizar
  //como product chega como objeto , objetos não passam no map 
  //é melhor fazer uma desestruturação par apegar a propriedade product do objeto
  // desestruturando o [{product}], ele tá vindo como undefined
  //pq a chamada da api é undefined : const [data, setData] = useState(); 
  //daí muda-se: cont [data]
  // e faz  a lógica no map: se tiver o data, você tenta extrair o products e faz o map
  
    return (

      
            <ScreenContainer>
                {data?.products.map(product => <ProductCard Key = {product.id} product ={product} addProductToCart={addProductToCart} />)}
                <ProductCard />
                
                <Link to= '/cart'>
                  <CartButton />
                </Link>

            </ScreenContainer>
        
      );
    };
    
