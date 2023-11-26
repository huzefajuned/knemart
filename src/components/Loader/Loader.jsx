import React from "react";
import loaderImg from '../../assets/loader.gif'

const Loader = () => {
  return (
    <div className=" bg-white h-screen w-screen absolute top-0 right-0 flex flex-col  justify-center items-center text-center text-4xl">
     <img src={loaderImg} alt="loader-gif" />
    </div>
  );
};

export default Loader;
