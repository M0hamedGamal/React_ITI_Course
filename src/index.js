import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// import ShoppingCart from "./ShoppingCart";
import App from "./components/App";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
