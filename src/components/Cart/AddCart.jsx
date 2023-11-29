import React from "react";
import { BsHandbagFill } from "react-icons/bs";

const AddCart = ({ cartItems }) => {
  return (
    <div className="cursor-pointer  flex flex-row  justify-end items-end  relative">
      <BsHandbagFill size={40} />
      <h2 className=" bg-red-400  rounded-full text-white w-6 h-6 text-center absolute bottom-8 left-6">
        {0 || cartItems.length}
      </h2>
    </div>
  );
};

export default AddCart;
