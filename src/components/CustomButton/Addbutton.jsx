import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

const Addbutton = () => {
    return (
        <div className=' flex flex-row p-6 justify-around'>
            <button className='bg-yellow-500 P-4 rounded-sm flex flex-col'>
                <CiShoppingCart className=" text-1xl mt-0 m-2" />ADD TO CART
            </button>
            <button className='bg-orange-700 p-4 w-44 text-xl rounded-sm'>BUY NOW</button>
        </div>
    )
}

export default Addbutton