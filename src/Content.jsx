import axios from "axios";
import { useState, useEffect } from "react";
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
    <main>
      <h1>Welcome to React!</h1>
      <SignUp />
      <Login />
      <LogoutLink />
      <ProductsIndex products={products} />
      {/* <CartedProductsIndex carted_products={carted_products} /> */}
    </main>
  );
}
