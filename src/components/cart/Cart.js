import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import BannerCart from "../../images/bannercart.jpg";

const Cart = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);

  const removeFromCart = (productId) => {
    let myCart = [...cart];
    let index = myCart.findIndex((item) => item.id === productId);
    myCart.splice(index, 1);
    setCart(myCart);
    localStorage.setItem("cart", JSON.stringify(myCart));
  };

  const imgStyle = {
    height: "150px",
    objectFit: "cover",
  };

  const cartTotal = () => {
    let total = 0;
    cart.map((item) => {
      total += item.price;
    });

    return parseFloat(total).toFixed(2);
  };

  const onBuyHandler = () => {
    setLoad(true);
    setTimeout(() => {
      localStorage.removeItem("cart");
      setCart([]);
      toast.success("Order has been placed successfully")
    }, 3000);
  };

  return (
    <>
      <div className="container">
        <img src={BannerCart} alt="cart banner" className="img-fluid my-1" />
      </div>
      <div className="row mt-3 p-3">
        <div className="col-md-9 my-1">
          <div className="card px-5 py-3">
            <p className="h2">Shopping Cart</p>
            <hr />
            {cart?.length < 1 ? (
              <>
                <p className="text-center h3">
                  No product is in the cart, continue{" "}
                  <span
                    className="text-primary pointer"
                    onClick={() => navigate("/products")}
                  >
                    Shopping
                  </span>{" "}
                </p>
              </>
            ) : (
              <>
                {cart?.map((data, index) => (
                  <div key={index}>
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src={data.image}
                            className="img-fluid rounded-start"
                            alt="image pic"
                            style={imgStyle}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <p className="card-title h5">{data.title}</p>
                            <p>
                              <span className="badge text-bg-warning text-white">
                                Best Seller
                              </span>
                              <span className="text-muted">
                                {" "}
                                in {data.category}
                              </span>
                            </p>
                            <div className="product-rating d-flex">
                              {Array(Math.round(data.rating.rate))
                                .fill()
                                .map((_, index) => (
                                  <p key={index}>⭐</p>
                                ))}
                              <span className="text-primary mx-3">
                                {data.rating.count} ratings
                              </span>
                            </div>
                            <p className="h5">${data.price}</p>
                            <p
                              className="text-end text-danger pointer"
                              onClick={() => removeFromCart(data.id)}
                            >
                              Remove
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
            {cart?.length > 0 ? (
              <>
                <div>
                  <p className="text-end h4">
                    Subtotal ({cart.length} items):${cartTotal()}
                  </p>
                </div>
              </>
            ) : null}
          </div>
        </div>
        <div className="col-md-3 my-1">
          {auth?.user?.name ? (
            <>
              <div className="card p-3">
                <div>
                  <p className="text-success text-center">
                    Your order is eligible for FREE Delivery.
                  </p>
                </div>
                <div>
                  <p className="text-center h3">
                    Subtotal ({cart.length} items): ${cartTotal()}
                  </p>
                </div>
                {cart.length > 0 ? (
                  <>
                    <div className="text-center my-3">
                      <button
                        className={`btn btn-warning text-white ${
                          load ? "disabled" : ""
                        }`}
                        onClick={onBuyHandler}
                      >
                        {load ? "Please wait..." : "Click here to Buy"}
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
            </>
          ) : (
            <>
              <div className="card p-3">
                <h5 className="text-center">
                  Please{" "}
                  <span
                    className="text-primary pointer"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </span>{" "}
                  to purchase
                </h5>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
