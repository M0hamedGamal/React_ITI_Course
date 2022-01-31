import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Product from "./Product";

let ShoppingCart = (props) => {
  console.log(useParams(), useLocation());

  return (
    <React.Fragment>
      <h1>Shopping Cart</h1>
      <button
        className="btn btn-secondary py-2 px-4 ms-2"
        onClick={props.onReset}
      >
        Reset
      </button>
      {props.products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddProduct={props.onIncrement}
          handleDeleteProduct={props.onDelete}
        />
      ))}
    </React.Fragment>
  );
};

export default ShoppingCart;
