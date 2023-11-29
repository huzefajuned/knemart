import React from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "/src/Images/Logo.png";

const Logo = () => {
  const navigate = useNavigate();
  const backToHomePage = () => {
    navigate("/");
  };
  return (
    <div className="w-full flex justify-center align-middle h-full md:justify-start md:pl-6">
      <img
        src={LogoImg}
        alt="logo"
        className=" w-min md:w-6/12 p-1 bg-contain cursor-pointer"
        onClick={backToHomePage}
      />
    </div>
  );
};

export default Logo;
