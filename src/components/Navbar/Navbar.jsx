import React from "react";
import Logo from "../Logo/Logo";
import AddCart from "../Cart/AddCart";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ cartItems }) => {
  return (
    <nav className="sticky top-0 bg-white w-full h-24 m-auto mt-0 z-10  shadow-2xl  p-3">
      <div className="flex h-full flex-row items-center justify-between gap-2 md:gap-0">
        <Logo />
        <div className="flex flex-row  w-2/3 items-center justify-end gap-10">
          <SearchBar />
          <AddCart cartItems={cartItems} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
