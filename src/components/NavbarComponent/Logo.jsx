import React from "react";
import LogoImg from "/src/Images/LogoImg.png";

const Logo = () => {
  return (
    <div className="bg-red-800 flex w-96 h-full">
      <div className="bg-green-500 flex justify-center align-middle w-40">
        <img
          src={LogoImg}
          alt="logo"
          className="w-14 h-14 rounded-full bg-cover"
        />
      </div>
      <div className="bg-yellow-500 w-60">
        <h2>Easy Commerce</h2>
        <p>Best eCommerce Theme</p>
      </div>
    </div>
  );
};

export default Logo;
