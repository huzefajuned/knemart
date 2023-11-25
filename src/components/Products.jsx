
import React from "react"
import { DummyData } from "../Datas/Data";
import CustomButton from "./CustomButton";
const Products = () => {
    return (
        <div className=" bg-white flex flex-row flex-wrap cursor-pointer  ">
            {
                DummyData.map((data, index, arr) => {
                    const { title, price, images, brand, button } = data;
                    return (
                        <div className="  m-10 w-72  text-center shadow-lg">

                            <img src={images} alt="" className=" h-72" />
                            <h2 className="text-xl text-black font-bold tracking-widest p-2">{title}</h2>
                            <h3 className="text-xl">Price:{price}</h3>
                            <h3 className="text-xl tracking-wide"> Brand:{brand}</h3>
                            <CustomButton button={button} />
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Products;