import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MyContainer from "./MyContainer";
import Footer from "./Footer";
import { useLoaderData, useParams } from "react-router";

const DetailsCard = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const [toys, setToys] = useState({});
  // console.log(toys);

  useEffect(() => {
    const toys = data.find((singleData) => singleData.toyId == id);

    setToys(toys);
  }, [data, id]);

  const {
    availableQuantity,
    description,
    pictureURL,
    price,
    rating,
    sellerEmail,
    sellerName,
    subCategory,
    toyId,
    toyName,
  } = toys;

  

  return (
    <div className="bg-base-200">
      <MyContainer>
        <Navbar></Navbar>

        <div className="bg-white mt-10 rounded-xl p-10 grid grid-cols-12">
          <div className="col-span-7">
            <img div className="rounded-xl w-full " src={pictureURL} alt="" />
          </div>
          <div className="col-span-5 px-5 text-accent">
            <h1 className="text-4xl font-semibold  ">{toyName}</h1>
                      <p className="mt-3 text-lg ">{description}</p>
                      <p className="mt-3 bg-secondar btn btn-secondary ">{subCategory}</p>
                      <p className="text-2xl ">{price}</p>
          </div>
        </div>

        <Footer></Footer>
      </MyContainer>
    </div>
  );
};

export default DetailsCard;
