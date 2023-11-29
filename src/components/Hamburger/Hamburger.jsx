import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Hamburger = () => {
  return (
    <div className=" w-auto flex  sm:flex md:hidden ">
      <RxHamburgerMenu size={40} />
    </div>
  );
};

export default Hamburger;
