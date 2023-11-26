import React from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "/src/Images/Logo.png";

const Logo = () => {
  const navigate = useNavigate();
  const  backToHomePage=()=>{
    navigate('/')
  }
  return (
    <div className=" flex w-80 h-full pl-10">
      <div className="flex justify-center align-middle w-60">
        <img
          src={LogoImg}
          alt="logo"
          className="w-full bg-contain cursor-pointer"
          onClick={backToHomePage}
        />
      </div>
    </div>
  );
};

export default Logo;
