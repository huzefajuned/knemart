import React from 'react'
import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import errorImage from "../assets/error.png"
export const Errorpage = () => {
    const navigate = useNavigate();
    const backHomePage = () => {
        navigate('/')
    }
    return (
        <div className=' bg-red-600  flex flex-col  justify-center items-center p-36 '>
            <img src={errorImage} alt="" className=' w-1/2 fle flex-row justify-center' />
            <button className=' w-96 p-10 text-4xl m-4 rounded-md hover:shadow-md	' onClick={backHomePage}>Back</button>
        </div>
    )
}


export default Errorpage