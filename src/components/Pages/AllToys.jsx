import React from "react";
import MyContainer from "../MyContainer";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link, useLoaderData } from "react-router";
import Card from "../Card";

const AllToys = () => {
  const data = useLoaderData();

  return (
    <div className="bg-base-200">
      <title>Toys Kingdom - All Toys</title>
      <MyContainer>
              
              <section className="bg-white rounded-xl p-10 mt-10">
                  
              <h1 className="text-center text-4xl font-semibold text-primary hover:text-secondary  ">All Toys</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 space-y-10 place-items-center  '>
              {
               data.map(card => <Card card={card} key={card.toyId}></Card>)
              }
              </div>
              <div className="flex justify-center ">
                  <Link to={'/'} className='btn btn-secondary px-13 text-center hover:btn-primary '>Show Less</Link>
                  </div>
              </section>
              
              
          </MyContainer>
          
    </div>
  );
};

export default AllToys;
