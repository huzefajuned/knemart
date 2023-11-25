import React from "react";
import LogoImg from "/src/Images/logoTransparent.png";

const Logo = () => {
  return (
    <div className=" flex w-96 h-full pl-3">
      <div className="flex justify-center align-middle w-70">
        <img
          src={LogoImg}
          alt="logo"
          className="w-full bg-contain cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Logo;
