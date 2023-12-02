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
        <div className=' flex flex-row p-2   mt-6 justify-between mr-6'>
            <button className='bg-yellow-500 P-4 w-44 text-xl rounded-sm flex flex-row justify-center items-center shadow-md'
                onClick={addCart}
            >
                <CiShoppingCart className="" />
                ADD TO CART

            </button>
            <button className=' bg-orange-700 p-4 w-44 text-xl rounded-sm flex flex-row justify-center items-center shadow-md'>
                <BsFillLightningChargeFill />BUY NOW
            </button>
        </div>
    )

}

export default Addbutton

