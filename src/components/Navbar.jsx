import React from "react";
import Logo from "../assets/Logo.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="pt-2.5 flex justify-between items-center ">
      <div>
        <img className="w-36" src={Logo} alt="" />
      </div>
      <div className="space-x-3">
        <NavLink to={'/'} className={({isActive})=> isActive? "bg-primary text-white px-2.5 py-0.5 rounded-lg font-semibold b ": "text-secondary"}>Home</NavLink>
        <NavLink to={'/profile'} className={({isActive})=> isActive? "bg-primary text-white px-2.5 py-0.5 rounded-lg font-semibold b ": "text-secondary"} >My Profile</NavLink>
      </div>
      <div>
        <Link className="btn btn-primary rounded-xl text-white ">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
