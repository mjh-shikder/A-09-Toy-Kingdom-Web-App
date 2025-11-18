import React from "react";
import MyContainer from "../MyContainer";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLoaderData } from "react-router";
import Card from "../Card";

const AllToys = () => {
  const data = useLoaderData();

  return (
    <div>
      <MyContainer>
        <Navbar></Navbar>
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 space-y-10 place-items-center  '>
              {
               data.map(card => <Card card={card} key={card.toyId}></Card>)
              }
              </div>
        <Footer></Footer>
      </MyContainer>
    </div>
  );
};

export default AllToys;
