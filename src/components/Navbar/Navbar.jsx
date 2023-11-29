import React from "react";
import Logo from "../Logo/Logo";
import AddCart from "../Cart/AddCart";
import SearchBar from "../SearchBar/SearchBar";
import Hamburger from "../Hamburger/Hamburger";
import Profile from "../Profile/Profile";

const Navbar = ({ cartItems }) => {
  return (
    <nav className="sticky top-0 bg-white w-full h-24 m-auto mt-0 z-10  shadow-2xl p-3">
      <div className="flex h-full flex-row items-center justify-between md:gap-0">
        <div className="w-full md:w-2/5 flex h-full flex-row items-center justify-between ">
          <Logo />
        </div>
        <div className="flex flex-row h-full w-3/5 items-center justify-end  gap-2 sm:gap-10 md:gap-10 pr-2 md:pr-5 md:w-full ">
          <SearchBar />
          <AddCart cartItems={cartItems} />
          <Hamburger />
          <Profile />
        </div>
      </div>
      {/* <SearchBar /> */}
    </nav>
  );
};

export default Navbar;
