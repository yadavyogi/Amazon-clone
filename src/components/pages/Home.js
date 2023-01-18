import React from "react";
import { useNavigate } from "react-router-dom";
import Banner1 from "../../images/banner1.jpg";
import He_1 from "../../images/home_electroics.jpg";
import He_2 from "../../images/home_health.jpg";
import He_3 from "../../images/home_beauty.jpg";
import { useProducts } from "../context/product";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = () => {
  const [products, setProducts] = useProducts();
  const navigate = useNavigate();
  return (
    <div className="home">
      <img className="banner-image" src={Banner1} alt="banner" />
      <div className="container row cards-pos mb-5 ">
        <div className="col-md-4 my-1">
          <div
            className="card pointer p-3"
            onClick={() => navigate("/products")}
          >
            <p className="h4 text-center">Electronics</p>
            <img
              src={He_1}
              alt="imagess"
              loading="lazy"
              className="img-fluid pointer"
            />
            <div className="card-body">
              <p className="text-center text-warning pointer">See more..</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-1">
          <div
            className="card pointer p-3"
            onClick={() => navigate("/products")}
          >
            <p className="h4 text-center">Beauty picks</p>
            <img
              src={He_3}
              alt="imagess"
              loading="lazy"
              className="img-fluid pointer"
            />
            <div className="card-body">
              <p className="text-center text-warning pointer">See more..</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-1">
          <div
            className="card pointer p-3"
            onClick={() => navigate("/products")}
          >
            <p className="h4 text-center">Personal Care</p>
            <img
              src={He_2}
              alt="imagess"
              loading="lazy"
              className="img-fluid pointer"
            />
            <div className="card-body">
              <p className="text-center text-warning pointer">See more..</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container card p-3 my-3">
        <h3>Mens Clothing</h3>
        <hr />
        <div className="d-flex justify-content-between overflow-auto">
          {products
            ?.filter((d) => d.category === "men's clothing")
            .map((data, index) => (
              <div key={index}>
                <LazyLoadImage
                  alt="product image"
                  src={data.image}
                  className="img-fluid pointer"
                  effect="blur"
                  placeholderSrc={data.image}
                  style={{ height: "200px", margin: "10px" }}
                  onClick={() => navigate("/products")}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="container card p-3 my-3 ">
        <h3>Electronics</h3>
        <hr />
        <div className="d-flex justify-content-between overflow-auto ">
          {products
            ?.filter((d) => d.category === "electronics")
            .map((data, index) => (
              <div key={index}>
                <LazyLoadImage
                  alt="product image"
                  src={data.image}
                  className="img-fluid pointer"
                  effect="blur"
                  placeholderSrc={data.image}
                  style={{ height: "200px", margin: "10px" }}
                  onClick={() => navigate("/products")}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="container card p-3 my-3 ">
        <h3>Jewellery</h3>
        <hr />
        <div className="d-flex justify-content-between overflow-auto ">
          {products
            ?.filter((d) => d.category === "jewelery")
            .map((data, index) => (
              <div key={index}>
                <LazyLoadImage
                  alt="product image"
                  src={data.image}
                  className="img-fluid pointer"
                  effect="blur"
                  placeholderSrc={data.image}
                  style={{ height: "200px", margin: "10px" }}
                  onClick={() => navigate("/products")}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="container card p-3 my-3">
        <h3>Womens Clothing</h3>
        <hr />
        <div className="d-flex justify-content-between overflow-auto">
          {products
            ?.filter((d) => d.category === "women's clothing")
            .map((data, index) => (
              <div key={index}>
                <LazyLoadImage
                  alt="product image"
                  src={data.image}
                  className="img-fluid pointer"
                  effect="blur"
                  placeholderSrc={data.image}
                  style={{ height: "200px", margin: "10px" }}
                  onClick={() => navigate("/products")}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
