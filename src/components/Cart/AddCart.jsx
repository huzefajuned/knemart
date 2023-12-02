import React, { useState } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const AddCart = ({ cartItems }) => {

  const cartItemsCount = Array.isArray(cartItems) ? cartItems.length : 0;
  return (


    <>
      <div className="cursor-pointer  flex flex-row  justify-end items-end  relative">

        <BsHandbagFill size={40} />
        <h2 className=" bg-red-400  rounded-full text-white w-6 h-6 text-center absolute bottom-8 left-6 object-none">
          {cartItemsCount}

        </h2>
      </div>

    </>
  );
};

export default AddCart;
