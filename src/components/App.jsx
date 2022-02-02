import React from "react";
import NavBar from "./NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ShoppingCart from "./ShoppingCart";
import ProductDetail from "./ProductDetails";
import NotFound from "./NotFound";
import AboutTeam from "./AboutTeam";
import AboutCompany from "./AboutCompany";
import Menu from "./Menu";

export default class App extends React.Component {
  state = {
    products: [
      { id: 1, name: "Burger", price: 30, count: 0, isInCart: false },
      { id: 2, name: "Potato", price: 20, count: 0, isInCart: false },
      { id: 3, name: "Fries", price: 10, count: 0, isInCart: false },
    ],
  };

  handleAddProduct = (product) => {
    let products = [...this.state.products];

    const index = products.indexOf(product);
    products[index] = { ...products[index] };

    products[index].count++;

    this.setState({ products });
  };

  handleDeleteProduct = (productId) => {
    // this.setState((prevState) => ({
    //   products: prevState.products.filter(
    //     (product) => product.id !== productId
    //   ),
    // }));
  };

  handleResetProductCount = () => {
    let products = [...this.state.products];

    products = products.map((p) => {
      p.count = 0;
      return p;
    });

    this.setState({ products });
  };

  handelIsInCart = (product) => {
    let products = [...this.state.products];

    const index = products.indexOf(product);
    products[index] = { ...products[index] };

    products[index].isInCart = !products[index].isInCart;

    this.setState({ products });
  };

  render() {
    return (
      <>
        <NavBar
          productsCount={this.state.products.filter((p) => p.isInCart).length}
        />
        <main className="container">
          <Routes>
            <Route
              path="menu"
              element={
                <Menu
                  products={this.state.products}
                  handelIsInCart={this.handelIsInCart}
                />
              }
            />
            {
              //   <Route path="" element={<Navigate to="home" />} />
              // <Route path="home" element={<Home />} />
              // <Route path="about" element={<About />}>
              //   <Route index element={<AboutTeam />} />
              //   <Route path="team" element={<AboutTeam />} />
              //   <Route path="company" element={<AboutCompany />} />
              // </Route>
              // <Route path="contact" element={<Contact />} />
            }
            <Route
              path="products"
              element={<ProductDetail products={this.state.products} />}
            >
              <Route
                path=":id"
                element={<ProductDetail products={this.state.products} />}
              />
            </Route>
            <Route
              path="cart"
              element={
                <ShoppingCart
                  products={this.state.products}
                  onIncrement={this.handleAddProduct}
                  onDelete={this.handelIsInCart}
                  onReset={this.handleResetProductCount}
                />
              }
            />
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="not-found" />} />
          </Routes>
        </main>
      </>
    );
  }
}
