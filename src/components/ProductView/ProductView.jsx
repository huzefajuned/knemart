import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiBaseURL } from "../Products/Products";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import Addbutton from "../CustomButton/Addbutton";
import { BsArrowReturnLeft } from "react-icons/bs";
const ProductView = () => {
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
        console.log("dataa", data);
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


  const selectimage = (index) => {
    setSelectedImg(index)
  }
  const { category, brand, description, price, rating, images } = product;

  return (
    <>
      <div>
        <div className=" flex flex-row  p-10  cursor-pointer h-screen  ">
          <div className=" flex flex-row ">
            <div className="flex flex-col w-28 object-contain p-1 m-4 h-96  overflow-scroll no-scrollbar">
              {/* Map all iamges....from the images array. */}
              {images?.map((imageUrl, index) => (
                <img
                  src={imageUrl}
                  onClick={() => selectimage(imageUrl, index)}
                  className="border-2  m-1 h-96 mt-0 object-contain hover:border-blue-400"
                />
              ))}
            </div>
            <div>
              <div className="m-2 flex flex-col p-3 h-96 ">
                <img
                  src={selectedImg || images?.[0]}
                  alt="images"
                  className=" h-96  border-solid border-2 border-neutral-950 p-1 object-cover w-96 shadow-md "
                />
              </div>
              <div>
                <Addbutton />
              </div>
            </div>
          </div>

          <div className=" p-20 ">
            <h2 className="text-4xl tracking-widest pb-5">Brand:{brand}</h2>
            <h3 className="text-2xl pb-3">Price:{price}</h3>
            <h2 className="text-2xl pb-3">Rating:{rating}</h2>

            <p className="text-xl">{description}</p>
            <button
              className="text-2xl pt-6 shadow-sm flex flex-row p-3 justify-center items-center"
              onClick={backToProduts}
            >
              Back to products
              <BsArrowReturnLeft />
            </button>
          </div>
        </div>

        {loading && <Loader />}
      </div>
    </>
  );
};

export default ProductView;
