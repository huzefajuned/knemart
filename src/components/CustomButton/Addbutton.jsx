import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { BsFillLightningChargeFill } from "react-icons/bs";


const Addbutton = () => {
    return (
        <div className=' flex flex-row p-6 justify-around'>
            <button className='bg-yellow-500 P-4 w-44 text-xl rounded-sm flex flex-row justify-center items-center shadow-md'>
                <CiShoppingCart className="" />ADD TO CART
            </button>
            <button className=' bg-orange-700 p-4 w-44 text-xl rounded-sm flex flex-row justify-center items-center shadow-md'>
            <BsFillLightningChargeFill/>BUY NOW
            </button>
        </div>
    )
}

export default Addbutton