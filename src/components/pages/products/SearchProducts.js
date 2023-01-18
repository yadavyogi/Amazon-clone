import React from "react";
import Card from "../../card/Card";
import { useSearch } from "../../context/search";
import NoProduct from "../../../images/no-product.svg";
import SearchBanner from "../../../images/searchBanner.jpg";
import { useNavigate } from "react-router-dom";

const SearchProducts = () => {
  const [results, setResults] = useSearch();
  const navigate = useNavigate();
  return (
    <div>
      <div className="container my-3">
        <img
          src={SearchBanner}
          alt="search banner"
          className="img-fluid w-100 pointer"
          onClick={() => navigate("/products")}
        />
      </div>
      {results?.length > 0 ? (
        <> 
            <p className="text-center h3">{results.length} products found</p>
          <div className="container bg-light d-flex justify-content-center flex-wrap">
            {results?.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </div>
        </>
      ) : (
        <div className="container text-center">
            <img src={NoProduct} alt="no product found" className="img-fluid" style={{"height": "300px", "width":"300px"}} />
            <h1 className="mt-3">No product found</h1>
            <p className="text-primary mt-3 pointer" onClick={() => navigate("/products")} >Click here to shopping</p>
        </div>
      )}
    </div>
  );
};

export default SearchProducts;
