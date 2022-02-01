import React from "react";
import Product from "./Product";

let ShoppingCart = (props) => {
  let { products, onReset, onIncrement, onDelete } = props;
  return (
    <React.Fragment>
      <h1>Shopping Cart</h1>
      <button className="btn btn-secondary py-2 px-4 ms-2" onClick={onReset}>
        Reset
      </button>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddProduct={onIncrement}
          handleDeleteProduct={onDelete}
        />
      ))}
    </React.Fragment>
  );
};

export default ShoppingCart;
