import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";
import MyContainer from "../MyContainer";

const HomeLayout = () => {
  return (
    <div className="bg-base-200">
      <MyContainer>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </MyContainer>
    </div>
  );
};

export default HomeLayout;
