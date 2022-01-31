import React from "react";
import { Link } from "react-router-dom";

export default class Product extends React.Component {
  componentWillUnmount() {
    console.log("Deleted!");
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1 mt-3">
            <span>
              <Link to={`/products/${this.props.product.id}`}>
                {this.props.product.name}
              </Link>
            </span>
          </div>
          <div className="col">
            <span className="badge bg-danger m-2">
              {this.props.product.count}
            </span>
            <button
              className="btn btn-primary m-2"
              onClick={() => this.props.handleAddProduct(this.props.product)}
            >
              +
            </button>
            <span
              onClick={() =>
                this.props.handleDeleteProduct(this.props.product.id)
              }
            >
              <i className="fas fa-trash"></i>
            </span>

            <br />
          </div>
        </div>
      </>
    );
  }
}
