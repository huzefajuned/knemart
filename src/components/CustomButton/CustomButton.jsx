import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { toast } from "react-toastify";
const CustomButton = ({ button }) => {
  const notify = () => {
    toast.success("Item added successfully...");
  };

  //
  return (
    <>
      <button
        onClick={notify}
        className=" w-44 relative ml-14 text-xl mb-3 mt-4 pt-2 shadow-md rounded-sm text-center flex flex-row  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300 "
      >
        <CiShoppingCart className=" text-3xl mt-0 m-2" /> {button}{" "}
      </button>
    </>
  );
};

export default CustomButton;
