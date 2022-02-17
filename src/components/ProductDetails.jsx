import React from "react";
import qs from "query-string";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = (props) => {
  const res = qs.parse(window.location.search);
  console.log(res);

  let navigate = useNavigate();
  const { id } = useParams();

  const product = props.products.filter((p) => parseInt(id) === p.id)[0];

  let handelSave = () => navigate("/shopping-cart", { replace: true });

  return (
    <>
      <h1>
        Product No.{product.id} is {product.name} has {product.count} counts.
      </h1>
      <button className="btn btn-primary" onClick={handelSave}>
        Save
      </button>
    </>
  );
};

export default ProductDetail;
