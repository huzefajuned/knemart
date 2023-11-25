import React from "react"
import { DummyData } from "../Datas/Data";
const Products = () => {
    return (
        <div className=" bg-white flex flex-row flex-wrap  ">
            {
                DummyData.map((data, index, arr) => {
                    const { title, price, images, brand, button } = data;
                    return (
                        <div className=" bg-white m-10 w-72 text-center">

                            <img src={images} alt="" className=" w-auto object-contain" />
                            <h2 className="text-xl pt-5 text-black font-bold tracking-widest">{title}</h2>
                            <h3 className="text-xl">{price}</h3>
                            <h3 className="text-xl tracking-wide">{brand}</h3>
                            <button className="bg-red-800 w-40 p-2 mt-2 text-xl mb-3 rounded-sm text-center">{button}</button>

                        </div>
                    )
                })
            }
        </div >
    )
}

export default Products;