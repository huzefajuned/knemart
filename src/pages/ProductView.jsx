import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiBaseURL } from "../components/Products/Products";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import Addbutton from "../components/CustomButton/Addbutton";
const ProductView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id)
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function getProducts() {
      try {
        const data = await axios.get(`${apiBaseURL}/products/${id}`);
        console.log('dataa', data)
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
    navigate('/products')
  }

  const { category, brand, description, price, rating, images } = product;

  return (
    <>
      <div>
        <div className=" flex flex-row  p-10 justify-between cursor-pointer pt-36 pb-44 bg-yellow-700">
          <div className=" flex flex-row ">
            <div className="flex flex-col w-28 object-cover items-center p-1 m-2  ">
              {images && Array.isArray(images) && images.map((imageUrl, index) => (
                <img src={imageUrl} />
              ))}
            </div>
            <div>
            <div className="m-2 flex flex-col ">
              <img src={images?.[0]} alt="images" className="object-cover" />
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
            <button className="text-2xl pt-6 shadow-sm p-5" onClick={backToProduts}>Back to products ←</button>
          </div>

        </div>



        {loading && <Loader />}
      </div>
    </>
  );
};

export default ProductView;
