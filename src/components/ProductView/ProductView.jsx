import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiBaseURL } from "../Products/Products";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import Addbutton from "../CustomButton/Addbutton";
import { BsArrowReturnLeft } from "react-icons/bs";
const ProductView = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  const [selectedImg, setSelectedImg] = useState("");
  const [CurrentImage, setCurrentImage] = useState("")

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await axios.get(`${apiBaseURL}/products/${id}`);
        // console.log("dataa", data);
        setProduct(data.data);
        // console.log(product)
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, [id]);

  const backToProduts = () => {
    navigate("/products");
  };


  const selectimage = (imageUrl, index) => {
    setSelectedImg(imageUrl)
    setCurrentImage(index)
  }
  const { category, brand, description, price, rating, images } = product;

  return (
    <>
      <div>
        <div className=" flex flex-col p-5   md:flex md:flex-row xl:flex xl:flex-row   ">
          <div className=" flex flex-col   md:flex md:flex-col  xl:flex xl:flex-row-reverse ">
            <div className="  justify-center md:w-96  xl:w-auto xl:m-5  ">
              <img
                src={selectedImg || images?.[0]}
                alt="images"
                className=" w-5/6 h-80  md:flex flex-row   xl:w-96 xl:h-96  m-4 border-solid border object-cover shadow-md  "
                x
              />
            </div>
            <div className="   flex flex-row object-contain overflow-scroll m-0 p-0 md:flex md:flex-row md:pl-0  xl:flex xl:flex-col xl:overflow-scroll xl:p-2  xl:h-96 xl:w-44 xl:mt-9 xl:no-scrollbar ">
              {/* Map all iamges....from the images array. */}
              {images?.map((imageUrl, index) => (
                <img
                  src={imageUrl}
                  onClick={() => selectimage(imageUrl, index)}
                  className={`flex flex-row  object-contain m-2 cursor-pointer w-24 xl:w-24 xl:h-24 xl:object-cover  ${CurrentImage === index ? 'border-2 border-blue-500' : 'border-2 border-gray-300'}`}
                />
              ))}
            </div>

          </div>

          <div className=" mb-36 p-4  xl:pt-9 ">
            <h2 className="text-xl tracking-widest pb-5 xl:text-4xl  xl:pl-10">Brand:{brand}</h2>
            <h3 className="text-xl pb-2 xl:text-2xl xl:pl-10">Price:{price}</h3>
            <h2 className="text-xl pb-2 xl:text-2xl  xl:pl-10">Rating:{rating}</h2>
            <p className="text-xl pb-2 xl:text-2xl  xl:pl-10">{description}</p>
            <button
              className="text-xl shadow-sm flex flex-row justify-center items-center  xl:ml-10"
              onClick={backToProduts}
            >
              Back to products
              <BsArrowReturnLeft />
            </button>
          </div>
        </div>
        <div>
          <Addbutton
            // button={"ADD TO CART"}
            product={product}
            cartItems={cartItems}
            setCartItems={setCartItems} />

        </div>
        {loading && <Loader />}
      </div>
    </>
  );
};

export default ProductView;
