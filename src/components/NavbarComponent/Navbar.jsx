import React from "react";
import Logo from "./Logo";
import AddCart from "./AddCart";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className=" w-11/12 h-24 m-auto mt-4 z-10">
      <div className="flex h-full flex-row items-center justify-between gap-3 md:gap-0">
        <Logo />
        <div className="flex flex-row  w-2/3 items-center justify-end gap-10 pr-10">
          <SearchBar />
          <AddCart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
