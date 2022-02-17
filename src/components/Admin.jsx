import React, { Component } from "react";
import { Link } from "react-router-dom";

class Admin extends Component {
  state = {};

  render() {
    let { products, handleDeleteProduct } = this.props;
    return (
      <>
        <h1>Admin</h1>
        <Link to={`/product-form/new`}>
          <button className="btn btn-primary">Add</button>
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>
                  <Link to={`/product-form/${p.id}`}>
                    <i className="fas fa-edit" style={{ cursor: "pointer" }} />
                  </Link>
                </td>
                <td>
                  <i
                    className="fas fa-trash"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDeleteProduct(p.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Admin;
