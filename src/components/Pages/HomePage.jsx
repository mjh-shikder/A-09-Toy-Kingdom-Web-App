import React from 'react';
import Slider from '../home/Slider';
import Popular from '../home/Popular';
import { useLoaderData } from 'react-router';



const HomePage = () => {

    const popularData = useLoaderData()
    
    

    return (
        <div>
            <Slider></Slider>
            <Popular popularData={popularData}></Popular>
        </div>
    );
};

export default HomePage;