import React from "react";
import MyContainer from "../MyContainer";
import { TbTruckDelivery, TbTruckLoading } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa";
import { RiSecurePaymentFill, RiShakeHandsFill } from "react-icons/ri";

const OurFeatures = () => {
  return (
    <div className="flex justify-between items-center bg-base-100 mt-10 rounded-xl p-2 h-44">
      <div className="w-3/12 h-10/12 border-r border-gray-200 rounded-xl flex items-center justify-center gap-5 text-primary hover:text-secondary ">
        <div>
          <TbTruckDelivery size={40}></TbTruckDelivery>
        </div>
        <div className="">
          <h3 className="font-semibold text-xl ">Express Delivery</h3>
          <p className="text-base-300 text-xs">Inside Dhaka</p>
        </div>
      </div>
      <div className="w-3/12 h-10/12 border-r border-gray-200 rounded-xl flex items-center justify-center gap-5 text-primary hover:text-secondary ">
        <div>
          <FaBoxOpen size={40}></FaBoxOpen>
        </div>
        <div className="">
          <h3 className="font-semibold text-xl ">Free Return</h3>
          <p className="text-base-300 text-xs">In 14 Days</p>
        </div>
      </div>
      <div className="w-3/12 h-10/12 border-r border-gray-200 rounded-xl flex items-center justify-center gap-5 text-primary hover:text-secondary ">
        <div>
          <RiShakeHandsFill size={40}></RiShakeHandsFill>
        </div>
        <div className="">
          <h3 className="font-semibold text-xl ">24/7 Support</h3>
          <p className="text-base-300 text-xs ">Online 24 Hours</p>
        </div>
      </div>
      <div className="w-3/12 h-10/12 rounded-xl flex items-center justify-center gap-5 text-primary hover:text-secondary ">
        <div>
          <RiSecurePaymentFill size={40}></RiSecurePaymentFill>
        </div>
        <div className="">
          <h3 className="font-semibold text-xl ">Payment Method</h3>
          <p className="text-base-300 text-xs ">Secure Payment</p>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
