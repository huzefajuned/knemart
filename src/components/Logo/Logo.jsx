import React from "react";
import LogoImg from "/src/Images/Logo.png";

const Logo = () => {
  return (
    <div className=" flex w-80 h-full pl-10">
      <div className="flex justify-center align-middle w-60">
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
