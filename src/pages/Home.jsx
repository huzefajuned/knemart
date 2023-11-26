import React from "react";
import Carousal from "../components/Carousal/Carousal";
import Products from "../components/Products/Products";
const Home = ({ cartItems, setCartItems }) => {
  return (
    <div className="flex flex-col gap-2">
      <Carousal />
      <Products cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default Home;
