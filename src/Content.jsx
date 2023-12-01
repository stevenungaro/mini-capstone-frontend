import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ProductsIndex } from "./ProductsIndex";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
// import { CartedProductsIndex } from "./CartedProductsIndex";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  // const [carted_products, setCartedProducts] = useState([]);

  // const handleIndexCartedProducts = () => {
  //   console.log("handleIndexCartedProducts");
  //   axios.get("http://localhost:3000/products.json").then((response) => {
  //     console.log(response.data);
  //     setCartedProducts(response.data);
  //   });
  // };

  // useEffect(handleIndexCartedProducts, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/games" element={<ProductsIndex products={products} />} />
      </Routes>
      <h1>Hello!</h1>
      <LogoutLink />
      {/* <CartedProductsIndex carted_products={carted_products} /> */}
    </div>
  );
}
