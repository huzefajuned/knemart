import React from "react";
import Products from "../components/Products";
import Navbar from "../components/Navbar/Navbar";
import Carousal from "../components/Carousal/Carousal";
const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <Navbar />
      <Carousal />
      <Products />
    </div>
  );
};

export default Home;
