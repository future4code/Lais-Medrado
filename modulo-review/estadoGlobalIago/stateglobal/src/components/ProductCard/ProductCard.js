import React from "react";
import { NameText, ProductImage } from "./styled";
import { CardContainer} from "./styled";
import { PriceContainer} from "./styled";
import { PriceText } from "./styled";




 //productImage tem que renderizar a url que recebe
 // em vez de escrever o objeto props ..ele vai fazer a desestruturação 
 //escrevendo as propriedades que ele quer 
 //alt é o texto alternativo se a imagem não aparecer, então uma boa é coloar o nome do produto
const ProductCard = ({product, addProductToCart}) => {
 
  return (
    <CardContainer>
      <ProductImage
        alt={product.name}
        src={product.photos[0]}
        //a photoso é um array reparando na documentação, então tmeos que pegar o primeiro
        //elemento dessa array 
      />
      <NameText>{product.name}</NameText>
      <PriceContainer>
        <PriceText>R${product.price}</PriceText>
        <button onClick={() => addProductToCart(product)}>Comprar</button>
      </PriceContainer>
    </CardContainer>
  );
};

export default ProductCard;
