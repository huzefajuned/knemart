import { CiShoppingCart } from "react-icons/ci";

import React from "react";
import { DummyData } from "../Datas/Data";
const Products = () => {
  return (
    <div className="  flex flex-wrap cursor-pointer ">
      {DummyData.map((data, index, arr) => {
        const { title, price, images, brand, button } = data;
        return (
          <div className=" bg-white m-10 w-72 text-center">
            <img src={images} alt="" className=" w-auto object-contain" />
            <h2 className="text-xl pt-5 text-black font-bold tracking-widest">
              {title}
            </h2>
            <h3 className="text-xl">{price}</h3>
            <h3 className="text-xl tracking-wide">{brand}</h3>
            <button className=" w-44 relative ml-14 text-xl mb-3 mt-4 pt-2 rounded-sm text-center flex flex-row  transition ease-in-out delay-150 bg-red-700 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300 ">
              {" "}
              <CiShoppingCart className=" text-3xl mt-0 m-2" /> {button}{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
