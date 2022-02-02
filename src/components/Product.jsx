import React from "react";
import { Link } from "react-router-dom";

export default class Product extends React.Component {
  componentWillUnmount() {}
  render() {
    let { product, handleAddProduct, handleDeleteProduct } = this.props;
    return (
      <>
        <div className="row">
          <div className="col-1 mt-3">
            <span>
              <Link to={`/products/${product.id}?name=${product.name}`}>
                {product.name}
              </Link>
            </span>
          </div>
          <div className="col">
            <span className="badge bg-danger m-2">{product.count}</span>
            <button
              className="btn btn-primary m-2"
              onClick={() => handleAddProduct(product)}
            >
              +
            </button>
            {
              <span
                style={{ cursor: "pointer" }}
                onClick={() => handleDeleteProduct(product)}
              >
                <i className="fas fa-trash" />
              </span>
            }

            <br />
          </div>
        </div>
      </>
    );
  }
}
