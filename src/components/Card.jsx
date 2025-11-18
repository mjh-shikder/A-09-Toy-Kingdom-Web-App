import React from "react";
import { LiaStarSolid } from "react-icons/lia";

const Card = ({ card }) => {
  const {
    toyName,
    sellerName,
    price,
    description,
    rating,
    pictureURL,
    availableQuantity,
  } = card;
  console.log(card);

  return (
    <div className="card bg-base-200 w-96 shadow-sm text-accent ">
      <figure>
        <img src={pictureURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between "> 
          <h2 className="cardTitle text-primary font-semibold text-2xl ">{toyName}</h2>
          <div className="font2 flex items-center font-semibold gap-1 text-secondary">
            {" "}
            <LiaStarSolid size={17}></LiaStarSolid> {rating}
          </div>
        </div>
        <p className="cardDes">{description}</p>
        <div className="flex  justify-between items-center">
          <h3 className="font2 text-secondary">Available Quantit ({availableQuantity})</h3>
          <h3 className="text-primary y text-lg font2  ">${price}</h3>
        </div>
        <button className="btn btn-primary hover:btn-secondary ">
          VIew More
        </button>
      </div>
    </div>
  );
};

export default Card;
