import React from 'react'
import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const errorImage = "/Public/errorImage.png"
export const Errorpage = () => {
    const navigate = useNavigate();
    const backHomePage = () => {
        navigate('/')
    }
    return (
        <div className='bg-red-700 flex flex-col justify-center '>
            <img src={errorImage} alt="" className='bg-yellow-600 w-96  fle flex-row justify-center' />
            <button className='bg-white w-96 p-4 text-2xl m-4 rounded-md' onClick={backHomePage}>Back</button>
        </div>
    )
}


export default Errorpage