import React, { useState, useEffect } from "react";
import "./Card.css";
import Base from "./Base";
import Card from "./Card";
import getProducts from "./helper/coreapicalls";
import { BounceLoader } from "react-spinners";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
        setLoading(true);
      }
    });
  };
  console.log(error);
  useEffect(() => {
    loadAllProduct();
  }, []);
  return (
    <Base title="Home page" description="Welcome to Electronics Store">
      <h2>All of Gadgets</h2>
      <div className="card__container">
        <div className="card__productContainer">
          {loading ? (
            products.map((product, index) => {
              return (
                <div key={index} className="">
                  <Card product={product} />
                </div>
              );
            })
          ) : (
            <BounceLoader size={100} />
          )}
        </div>
      </div>
    </Base>
  );
};

export default Home;
