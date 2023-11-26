import React from "react";
import { BsHandbagFill } from "react-icons/bs";

const AddCart = ({ cartItems }) => {
  return (
    <div className=" cursor-pointer pr-10 flex flex-row justify-end">
      <BsHandbagFill size={40} />
      <h2 className="absolute bg-red-600 top-4 right-10 rounded-full text-white w-6 h-6 text-center">
        {0 || cartItems.length}
      </h2>
    </div>
  );
};

export default AddCart;
