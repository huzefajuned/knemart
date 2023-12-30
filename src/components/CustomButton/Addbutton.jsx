import React from 'react'
import { useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { toast } from "react-toastify";

import { BsFillLightningChargeFill } from "react-icons/bs";

const Addbutton = ({ product, setCartItems, button, cartItems }) => {
    const navigate = useNavigate();
    const addCart = () => {
        toast.success("Item added successfully...");
        setCartItems([...cartItems, product]);
    }
    return (
        <div className='  md: flex flex-row md:w-96 md:mb-80 bg-white mb-20 p-2 m-2 gap-3 z-0  justify-between fixed left-0 right-0 bottom-0  xl:w-96  xl:ml-44 xl:mb-40'>
            <button className='bg-yellow-500 P-4 w-48 text-md rounded-sm flex flex-row justify-center items-center shadow-md'
                onClick={addCart}
            >
                <CiShoppingCart className="" />
                ADD TO CART

            </button>
            <button className=' bg-orange-700 p-4 w-48 text-md rounded-sm flex flex-row justify-center items-center shadow-md'>
                <BsFillLightningChargeFill />BUY NOW
            </button>
        </div>
    )

}

export default Addbutton

