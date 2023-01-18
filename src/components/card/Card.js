import React, { useState } from "react";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";

const Card = ({ data }) => {
  const [cart, setCart] = useCart();

  const handleAddCart = () => {
    setCart([...cart, data]);
    localStorage.setItem("cart", JSON.stringify([...cart, data]));
    toast.success("Added to cart successfully");
  };

  return (
    <>
      <div className="card indiv-tile-holder m-3" style={{ width: "300px" }}>
        <img
          className="card-img-top"
          src={data.image}
          width={200}
          alt={data.name}
          loading="lazy"
          style={{ maxHeight: "250px", objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column">
          <p className="card-title">{data.title}</p>
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
          <div className="d-flex justify-content-between">
            <p>
              {" "}
              <sup className="h6">$</sup>{" "}
              <span className="h3">{data.price}</span>
            </p>
          </div>
          <div className="text-center" style={{ marginTop: "auto" }}>
            <button className="btn btn-warning btn-sm" onClick={handleAddCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
