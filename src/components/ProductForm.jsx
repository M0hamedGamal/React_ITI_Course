import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Joi from "joi-browser";
import axios from "axios";

let ProductForm = (props) => {
  let navigate = useNavigate();
  let { id } = useParams();

  let [state, setState] = useState({
    name: "",
    price: null,
    errors: {},
  });

  let schema = {
    name: Joi.string().required(),
    price: Joi.number().required(),
  };

  useEffect(async () => {
    if (id !== "new") {
      const { data } = await axios.get(`http://localhost:3000/products/${id}`);

      // Clone
      let productData = { ...state };

      // Edit
      productData.name = data.name;
      productData.price = data.price;

      // SetState
      setState(productData);
    }
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (errors) return;

    const obj = { ...state };

    obj.price = parseInt(obj.price);

    delete obj.errors;

    if (id !== "new") {
      let editProduct = {
        ...obj,
      };
      await axios.patch(`http://localhost:3000/products/${id}`, editProduct);
    } else {
      let newProduct = {
        id: props.products.length + 1,
        count: 0,
        isInCart: false,
        ...obj,
      };
      await axios.post("http://localhost:3000/products", newProduct);
    }
    props.updateState();
    navigate("/admin", { replace: true });
  };

  let handleChange = (e) => {
    const obj = { ...state };
    obj[e.currentTarget.name] = e.currentTarget.value;
    setState(obj);
  };

  let validate = () => {
    const errors = {};

    const obj = { ...state };

    delete obj.errors;

    const res = Joi.validate(obj, schema, { abortEarly: false });

    if (res.error == null) {
      setState({ errors: {} });
      return null;
    }

    for (let error of res.error.details) {
      errors[error.path] = error.message;
    }

    let objState = { ...state };

    objState.errors = errors;

    setState(objState);
    return errors;
  };

  return (
    <React.Fragment>
      <h1>{id !== "new" ? "Edit" : "Add"} Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            name="name"
            value={state.name || ""}
            onChange={(e) => handleChange(e)}
          />
          {state.errors.name && (
            <div className="alert alert-danger">{state.errors.name}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={state.price || ""}
            onChange={(e) => handleChange(e)}
          />
          {state.errors.price && (
            <div className="alert alert-danger">{state.errors.price}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          {id !== "new" ? "Edit" : "Add"}
        </button>
      </form>
    </React.Fragment>
  );
};

export default ProductForm;
