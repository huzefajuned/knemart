import React from "react";
import Logo from "./Logo";
import AddCart from "./AddCart";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="bg-blue-400 w-11/12 h-24 m-auto mt-4 z-10">
      <div className="flex h-full flex-row items-center justify-between gap-3 md:gap-0">
        <Logo />
        <SearchBar />
        <AddCart />
      </div>
    </nav>
  );
};

export default Navbar;
