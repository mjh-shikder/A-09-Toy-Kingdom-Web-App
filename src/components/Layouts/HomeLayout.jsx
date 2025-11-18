import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";
import MyContainer from "../MyContainer";

const HomeLayout = () => {
  return (
    <div className="bg-base-200">
      <header>
        <nav>
          <MyContainer>
            <Navbar></Navbar>
          </MyContainer>
        </nav>
      </header>
      <main>
        <MyContainer>
          <Outlet></Outlet>
        </MyContainer>
      </main>
      <footer>
        <MyContainer>
          <Footer></Footer>
        </MyContainer>
      </footer>
    </div>
  );
};

export default HomeLayout;
