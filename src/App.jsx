import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {

  return (
    <>

      <Navbar />


      <main className="min-h-screen">

        <Routes>


          <Route
            path="/"
            element={<Home />}
          />


          <Route
            path="/products"
            element={<Products />}
          />


          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />


          <Route
            path="/cart"
            element={<Cart />}
          />


          <Route
            path="/checkout"
            element={<Checkout />}
          />


          <Route
            path="/login"
            element={<Login />}
          />


          <Route
            path="/register"
            element={<Register />}
          />


          <Route
            path="/profile"
            element={<Profile />}
          />


          <Route
            path="*"
            element={<NotFound />}
          />


        </Routes>

      </main>


      <Footer />


    </>
  );
}


export default App;
