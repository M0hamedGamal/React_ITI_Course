import React from "react";
import NavBar from "./NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import AboutTeam from "./AboutTeam";
// import AboutCompany from "./AboutCompany";
import NotFound from "./NotFound";
import ShoppingCart from "./ShoppingCart";
import ProductDetail from "./ProductDetails";
import Menu from "./Menu";
import Login from "./Login";
import axios from "axios";
import Admin from "./Admin";
import ProductForm from "./ProductForm";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount = async () => {
    await axios
      .get("http://localhost:3000/products")
      .then(({ data }) => this.setState({ products: data }));
  };

  updateState = async () => {
    await axios
      .get("http://localhost:3000/products")
      .then(({ data }) => this.setState({ products: data }));
  };

  handleIncrementProduct = (product) => {
    let products = [...this.state.products];

    const index = products.indexOf(product);
    products[index] = { ...products[index] };

    products[index].count++;

    this.setState({ products });
  };

  handleDeleteProduct = async (productId) => {
    await axios.delete(`http://localhost:3000/products/${productId}`);

    let products = [...this.state.products];

    products = products.filter((product) => product.id !== productId);

    this.setState({ products });

    toast.success("Item is Deleted");
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
        <ToastContainer />
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
              <Route path="" element={<Navigate to="menu" />} />
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
                  onIncrement={this.handleIncrementProduct}
                  onDelete={this.handelIsInCart}
                  onReset={this.handleResetProductCount}
                />
              }
            />
            <Route
              path="admin"
              element={
                <Admin
                  products={this.state.products}
                  handleDeleteProduct={this.handleDeleteProduct}
                />
              }
            />
            <Route
              path="product-form/:id"
              element={
                <ProductForm
                  products={this.state.products}
                  updateState={this.updateState}
                />
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="not-found" />} />
          </Routes>
        </main>
      </>
    );
  }
}
