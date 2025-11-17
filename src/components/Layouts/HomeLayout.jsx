import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar';
import Footer from '../Footer';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;