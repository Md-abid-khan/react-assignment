import React, { useState } from 'react';
import imageLogo from "../../../git/B11A08-router-warrior/C001-assets/logo.png"
import FbLogo from "../../../DocPic/SM Logo/facebook.png"
import linkedInLogo from "../../../DocPic/SM Logo/linkedin.png"
import XLogo from "../../../DocPic/SM Logo/twitter.png"
import youtubeLogo from "../../../DocPic/SM Logo/youtube.png"
import { Link } from 'react-router';

const Footer = () => {
     const [active , setActive] = useState('');
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded py-10">
                <div>
                    <div className='flex'>
                        <img className='h-10 items-center' src={imageLogo} alt="Company Logo" />
                        <a className="btn btn-ghost text-xl font-bold">Phudu</a>
                    </div>
                </div>
                <nav className="grid grid-flow-col gap-4">
                    <ul className="menu menu-horizontal p-2 mx-2">
                        <Link to={"/"}><li className='rounded-sm' onClick={()=> setActive("Home")} style={{backgroundColor: active === "Home" ? "blue" : ""}}><a>Home</a></li></Link>
                        <Link to={"/bookmarks"}><li className='rounded-sm' onClick={()=> setActive("My Bookings")} style={{backgroundColor: active === "My Bookings" ? "blue" : ""}}><a>My Bookings</a></li></Link>
                        <Link to={"/blogs"}><li className='rounded-sm' onClick={()=> setActive("Blog")} style={{backgroundColor: active === "Blog" ? "blue" : ""}}><a> Blog</a></li></Link>
                        
                        <Link to={"/contactUs"}><li className='rounded-sm' onClick={()=> setActive("Contact Us")} style={{backgroundColor: active === "Contact Us" ? "blue" : ""}}><a> Contact Us </a></li></Link>
                    </ul>
                </nav>
                <div className='border-t-2 w-3/4 border-dotted'>

                </div>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://www.facebook.com/' target='_blank'><img className='h-10' src={FbLogo} alt="facebook Logo" /></a>
                        <a href='https://x.com/' target='_blank'><img className='h-10' src={XLogo} alt="X logo" /> </a>
                        
                        <a href='https://www.youtube.com/' target='_blank'><img className='h-10' src={youtubeLogo} alt="Youtube Logo" /></a>
                        <a href='https://www.linkedin.com/' target='_blank'><img className='h-10' src={linkedInLogo} alt="LinkedIn Logo" /></a>
                    </div>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;