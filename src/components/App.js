import React from "react";
import "../styles/App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "../images/pagenotfound.svg";
import { Toaster } from "react-hot-toast";

// Component
import Home from "./pages/Home";
// const LazyHome = React.lazy(() => import("./pages/Home"))
import Nav from "./nav/Nav";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Products from "./pages/products/Products";
import Cart from "./cart/Cart";
import SearchProducts from "./pages/products/SearchProducts";
import Footer from "./footer/Footer";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container text-center d-flex flex-column justify-content-center align-items-center">
        <img
          src={NotFound}
          alt="page not found"
          className="img-fluid"
          style={{ height: "400px", width: "400px" }}
        />
        <button
          className="btn btn-warning"
          onClick={() => navigate("/")}
          style={{ margin: "0 auto" }}
        >
          Back to Home
        </button>
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="layout">
        <Toaster position="top-right" />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search-product" element={<SearchProducts />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
