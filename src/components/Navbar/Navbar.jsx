import React from "react";
import Logo from "../Logo/Logo";
import AddCart from "../Cart/AddCart";
import SearchBar from "../SearchBar/SearchBar";
import Hamburger from "../Hamburger/Hamburger";
import Profile from "../Profile/Profile";

const Navbar = ({ cartItems }) => {
  return (
    <nav className="sticky top-0 bg-red-400 w-[97%] h-40 md:h-24 m-auto mt-0 z-10  shadow-2xl p-3">
      <div className="flex h-20 flex-row items-center justify-between md:gap-0 bg-red-300">
        <div className="w-2/5 md:w-2/5 flex h-20 flex-row items-center justify-start">
          <Logo />
        </div>
        <div className="flex flex-row h-24 w-3/5 items-center md:justify-end justify-end gap-2 sm:gap-10 md:gap-10 pr-2 md:pr-5 md:w-full ">
          {/* <div> */}
          <SearchBar />
          {/* </div> */}
          <AddCart cartItems={cartItems} />
          <Hamburger />
          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
