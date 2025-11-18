import React from "react";
import { LiaStarSolid } from "react-icons/lia";
import { Link } from "react-router";

const Card = ({card}) => {


  

  const {
    toyName,
    price,
    description,
    rating,
    pictureURL,
      availableQuantity,
    toyId,
  } = card;
//   console.log(card);

  return (
    <div className="card bg-base-200 w-96 shadow-sm text-accent ">
      <figure>
        <img className="h-64" src={pictureURL} alt="kids-toy" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between "> 
          <h2 className="cardTitle text-primary font-semibold text-2xl ">{toyName}</h2>
          <div className="font2 flex items-center font-semibold gap-1 text-secondary bg-white py-0.5 border border-gray-100 rounded-md px-1.5">
            {" "}
            <LiaStarSolid size={17}></LiaStarSolid> {rating}
          </div>
        </div>
        <p className="cardDes">{description}</p>
        <div className="flex  justify-between items-center">
          <h3 className="font2 text-secondary bg-white py-0.5 border border-gray-100 rounded-md px-1.5">Available Quantit ({availableQuantity})</h3>
          <h3 className="text-primary text-lg font2 bg-white py-0.5 border border-gray-100 rounded-md px-1.5">${price}</h3>
        </div>
        <Link to={`/card-details/${toyId}`} className="btn btn-primary hover:btn-secondary mt-1.5 ">
          VIew More
        </Link>
      </div>
    </div>
  );
};

export default Card;
