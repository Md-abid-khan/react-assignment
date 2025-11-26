import React, { useState } from 'react';
import imageLogo from "../../../git/B11A08-router-warrior/C001-assets/logo.png"
import { Link } from 'react-router';

const Header = () => {

    const [active , setActive] = useState('');
    return (
        <div>
            <div className="navbar  px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-6 shadow mx-2">
                            <Link to={"/"}><li className='rounded-sm' onClick={()=> setActive("Home")} style={{backgroundColor: active === "Home" ? "blue" : ""}}><a>Home</a></li></Link>
                            <Link to={"/bookmarks"} className='rounded-sm' onClick={()=> setActive("My Bookings")} style={{backgroundColor: active === "My Bookings" ? "blue" : ""}}><li><a>My Bookings</a></li></Link>
                            <Link to={"/blogs"}><li className='rounded-sm' onClick={()=> setActive("Blog")} style={{backgroundColor: active === "Blog" ? "blue" : ""}} ><a> Blog</a></li></Link>
                            <Link to={"/contactUs"}><li className='rounded-sm' onClick={()=> setActive("Contact Us")} style={{backgroundColor: active === "Contact Us" ? "blue" : ""}}><a> Contact Us </a></li></Link>
                        </ul>
                    </div>
                    <div className='flex'>
                        <img className='h-10 items-center' src={imageLogo} alt="Company Logo" />
                        <a className="btn btn-ghost text-xl font-bold">Phudu</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-2 mx-2">
                        <Link to={"/"}><li className='rounded-sm' onClick={()=> setActive("Home")} style={{backgroundColor: active === "Home" ? "blue" : ""}}><a>Home</a></li></Link>
                            <Link to={"/bookmarks"} className='rounded-sm' onClick={()=> setActive("My Bookings")} style={{backgroundColor: active === "My Bookings" ? "blue" : ""}}><li><a>My Bookings</a></li></Link>
                            <Link to={"/blogs"}><li className='rounded-sm' onClick={()=> setActive("Blog")} style={{backgroundColor: active === "Blog" ? "blue" : ""}} ><a> Blog</a></li></Link>
                            <Link to={"/contactUs"}><li className='rounded-sm' onClick={()=> setActive("Contact Us")} style={{backgroundColor: active === "Contact Us" ? "blue" : ""}}><a> Contact Us </a></li></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-blue-600 text-white rounded-3xl">Emergency</a>
                </div>
            </div>
        </div>
    );
};

export default Header;