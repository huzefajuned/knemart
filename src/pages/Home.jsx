import React from "react";
import Products from "../components/Products";
import Navbar from "../components/NavbarComponent/Navbar";
const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Products />
    </React.Fragment>
  );
};

export default Home;
