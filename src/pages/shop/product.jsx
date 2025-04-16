import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const Product = (props) => {
  const { id, productsName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="poduct">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productsName}</b>
        </p>
        <p>${price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
