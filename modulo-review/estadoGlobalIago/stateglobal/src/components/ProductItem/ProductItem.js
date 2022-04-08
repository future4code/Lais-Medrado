import React from "react";
import { ItemContainer, ItemImage, TextContainer, NameText } from "./styled";


//esse item é unm products
const ProductItem = ({ item, removeProduct}) => {
  return (
    <ItemContainer>
      <ItemImage
        alt={item.name}
        src={item.photos[0]}
      />
      <TextContainer>
        <NameText>{item.name}</NameText>
        <p>
          R${item.price} <b>x{item.quantity}</b>
        </p>
      </TextContainer>
      <button onClick={() => removeProduct(item)}>Remover</button>
    </ItemContainer>
  );
};

export default ProductItem;
