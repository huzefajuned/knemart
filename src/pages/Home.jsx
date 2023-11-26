import React from "react";
import Carousal from "../components/Carousal/Carousal";
import Products from "../components/Products/Products";
const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <Carousal />
      <Products />
    </div>
  );
};

export default Home;
