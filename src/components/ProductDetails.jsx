import React, { Component } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const { id } = useParams();
  const product = props.products.filter((p) => parseInt(id) === p.id)[0];
  return (
    <h1>
      Details No.{id} <br /> name is {product.name || "Anonymous"} <br />
      count is {product.count}
    </h1>
  );
};

export default ProductDetail;
