import React, { Component } from "react";

class Menu extends Component {
  state = {};
  render() {
    let { products, handelIsInCart } = this.props;
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>
                  <i
                    className={
                      p.isInCart
                        ? "fas fa-shopping-cart active"
                        : "fas fa-shopping-cart inActive"
                    }
                    style={{ cursor: "pointer" }}
                    onClick={() => handelIsInCart(p)}
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

export default Menu;
