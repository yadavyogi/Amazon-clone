import React, { useState } from "react";
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useSearch } from "../context/search";
import { useProducts } from "../context/product";

const Nav = () => {
  // Custom hook
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const [values, setValues] = useState("");
  const [results, setResults] = useSearch();
  const [products, setProducts] = useProducts();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResults([]);
    const filteredData = products.filter((data) =>
      data?.title.toLowerCase().includes(values.toLowerCase())
    );
    setResults(filteredData);
    navigate("/search-product");
  };

  const logoutHandler = () => {
    setAuth({ ...auth, user: null });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <>
      <nav className="header">
        <Link to="/">
          <img
            className="header-logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
          />
        </Link>
        <div className="nav-link header-option text-center">
          <span className="option-one">Hello</span>
          <span className="option-two">
            {" "}
            <HiOutlineLocationMarker /> India
          </span>
        </div>
        <div className="header-search">
          <input
            type="text"
            className="form-control"
            value={values}
            onChange={(e) => setValues(e.target.value)}
          />
          <button
            className="btn btn-warning mx-1"
            type="submit"
            onClick={handleSubmit}
          >
            Search{" "}
          </button>
        </div>

        <div className="header-nav">
          <Link to={auth?.user ? "/" : "/login"} className="nav-link">
            <div className="header-option">
              <span className="option-one">
                {auth?.user?.name ? `Hello, ${auth?.user?.name}` : "Hello"}
              </span>
              {!auth?.user ? (
                <span className="option-two">
                  {auth?.user ? "Login" : "Login"}
                </span>
              ) : (
                <span className="option-two" onClick={logoutHandler}>
                  Logout
                </span>
              )}
            </div>
          </Link>

          <Link to="/products" className="nav-link">
            <div className="header-option">
              <span className="option-one">All</span>
              <span className="option-two">Products</span>
            </div>
          </Link>

          <Link to="/cart" className="nav-link">
            <div className="d-flex align-items-center">
              <FaShoppingCart className="mx-1" /> {cart.length}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
