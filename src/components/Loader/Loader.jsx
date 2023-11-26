import React from "react";

const loaderImage="/Public/loadingImage.png"
const Loader = () => {
  return (
    <div className="bg-blue-300 h-screen w-screen flex flex-col  justify-center items-center text-center text-4xl">
     <img src={loaderImage} alt="" />
    </div>
  );
};

export default Loader;
