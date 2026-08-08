import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import {cartProvider} from "./context/CartContext";
import {searchprovider} from "./context/searchcontext";


ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <SearchProvider>

      <CartProvider>

        <BrowserRouter>

          <App />

        </BrowserRouter>

      </CartProvider>

    </SearchProvider>

  </React.StrictMode>

);