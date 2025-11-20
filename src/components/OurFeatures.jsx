import React from "react";
import MyContainer from "./MyContainer";
import { TbTruckDelivery, TbTruckLoading } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa";

const OurFeatures = () => {
  return (
    <div className="flex justify-between items-center bg-base-100 mt-10 rounded-xl p-2 h-44">
      <div className="w-3/12 h-10/12 border-r border-gray-200 rounded-xl flex items-center justify-center gap-5">
        <div>
          <TbTruckDelivery color="#f16a6c" size={40}></TbTruckDelivery>
        </div>
        <div className="text-primary ">
          <h3 className="textsecon font-semibold text-xl ">Express Delivery</h3>
          <p className="text-accent ">Inside Dhaka</p>
        </div>
      </div>
      <div className="w-3/12 h-10/12 border-r border-gray-200 rounded-xl flex items-center justify-center gap-5 ">
        <div>
          <FaBoxOpen color="#f16a6c" size={40}></FaBoxOpen>
        </div>
        <div className="text-primary ">
          <h3 className="textsecon font-semibold text-xl ">Free Return</h3>
          <p className="text-accent ">In 14 Days</p>
        </div>
      </div>
      <div className="w-3/12 h-10/12 border-r border-gray-200 rounded-xl flex items-center justify-center gap-5">
        4
      </div>
      <div className="w-3/12 h-10/12  rounded-xl flex items-center justify-center gap-5 ">
        3
      </div>
    </div>
  );
};

export default OurFeatures;
