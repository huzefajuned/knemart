import React from "react";
import Products from "../components/Products";
import Navbar from "../components/Navbar/Navbar";
const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <Navbar />
      <Products />
    </div>
  );
};

export default Home;
