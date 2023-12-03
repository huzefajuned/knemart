import React from "react";
import Logo from "../Logo/Logo";
import AddCart from "../Cart/AddCart";
import SearchBar from "../SearchBar/SearchBar";
import Hamburger from "../Hamburger/Hamburger";
import Profile from "../Profile/Profile";

const Navbar = ({ cartItems }) => {
  return (
    <nav className="sticky top-0 bg-white w-[97%] md:w-full h-40 md:h-24 m-auto mt-0 z-10  shadow-2xl p-2">
      <div className="flex h-20 flex-row items-center justify-between md:gap-0">
        <div className="w-2/5 md:w-[30%] flex h-20 flex-row items-center justify-start">
          <Logo />
        </div>
        <div className="flex flex-row h-auto w-3/5 md:w-[70%] items-center md:justify-end justify-end gap-2 sm:gap-10 md:gap-10 pr-2 md:pr-5">
          <SearchBar />
          <AddCart cartItems={cartItems} />
          <Hamburger />
          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
