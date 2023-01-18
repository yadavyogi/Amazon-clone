import React, { useState, useEffect } from "react";
import Card from "../../card/Card";
import { useProducts } from "../../context/product";

const Products = () => {
  const [products, setProducts] = useProducts();
  const [showProduct, setShowProduct] = useState([...products]);
  const [radio, setRadio] = useState("");

  useEffect(() => {
    setRadio("all");
  }, []);

  useEffect(() => {
    loadRadioFilterData();
  }, [radio]);

  const loadRadioFilterData = () => {
    if (radio === "all") {
      setShowProduct(products);
    } else if (radio === "men") {
      let newProducts = [...products];
      let filter = newProducts.filter(
        (data) => data.category === "men's clothing"
      );
      setShowProduct(filter);
    } else if (radio === "women") {
      let newProducts = [...products];
      let filter = newProducts.filter(
        (data) => data.category === "women's clothing"
      );
      setShowProduct(filter);
    } else if (radio === "electronics") {
      let newProducts = [...products];
      let filter = newProducts.filter(
        (data) => data.category === "electronics"
      );
      setShowProduct(filter);
    } else if (radio === "Jewellery") {
      let newProducts = [...products];
      let filter = newProducts.filter((data) => data.category === "jewelery");
      setShowProduct(filter);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-3 mt-3">
          <h4 className="text-center">FILTERS</h4>
          <hr />
          <div className="filter-holder px-5">
            <div className="py-3">
              <h5>Categories</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="all"
                  checked={radio === "all"}
                  value="all"
                  onChange={(e) => setRadio(e.target.value)}
                  id="all-radio"
                />
                <label className="form-check-label" htmlFor="all">
                  All
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  checked={radio === "men"}
                  value="men"
                  onChange={(e) => setRadio(e.target.value)}
                  id="men-radio"
                />
                <label className="form-check-label" htmlFor="men">
                  Men
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  checked={radio === "women"}
                  value="women"
                  onChange={(e) => setRadio(e.target.value)}
                  id="women-radio"
                />
                <label className="form-check-label" htmlFor="women">
                  Women
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="electronics"
                  checked={radio === "electronics"}
                  value="electronics"
                  onChange={(e) => setRadio(e.target.value)}
                  id="electronics-radio"
                />
                <label className="form-check-label" htmlFor="electronics">
                  Electronics
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Jewellery"
                  checked={radio === "Jewellery"}
                  value="Jewellery"
                  onChange={(e) => setRadio(e.target.value)}
                  id="Jewellery-radio"
                />
                <label className="form-check-label" htmlFor="Jewellery">
                  Jewellery
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 mt-3">
          <h4 className="text-center">All Products</h4>
          <hr />

          <div className="product-tile-holder d-flex flex-wrap justify-content-between">
            {showProduct?.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
