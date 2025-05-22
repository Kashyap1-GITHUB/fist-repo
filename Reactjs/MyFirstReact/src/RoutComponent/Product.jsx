import React from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  const Navigatehandlar = (name) => {
    navigate(`/product/productdetails/${name}`);
  };
  return (
    <div className="flex flex-col gap-10 p-2">
      <h1 className="text-5xl">Product</h1>

      <div>
        <h2>Product Name 1</h2>
        <p>Producted Price : 999$</p>
        <p>grosary</p>

        <button
          onClick={() => Navigatehandlar("Product 1")}
          className="w-[7%] rounded bg-white text-black border"
        >
          Details
        </button>
      </div>
      <div>
        <h2>Product Name 2</h2>
        <p>Producted Price : 999$</p>
        <p>grosary</p>

 <button
         onClick={() => Navigatehandlar("Product 2")}
          className="w-[7%] rounded bg-white text-black border"
        >
          Details
        </button>
      </div>
      <div>
        <h2>Product Name 3</h2>
        <p>Producted Price : 999$</p>
        <p>grosary</p>

 <button
         onClick={() => Navigatehandlar("Product 3")}
          className="w-[7%] rounded bg-white text-black border"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Product;
