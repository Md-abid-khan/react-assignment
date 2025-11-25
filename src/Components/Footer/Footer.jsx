import React from 'react';
import imageLogo from "../../../git/B11A08-router-warrior/C001-assets/logo.png"
import FbLogo from  "../../../DocPic/SM Logo/facebook.png"
import linkedInLogo from "../../../DocPic/SM Logo/linkedin.png"
import XLogo from "../../../DocPic/SM Logo/twitter.png"
import youtubeLogo from "../../../DocPic/SM Logo/youtube.png"

const Footer = () => {
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
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <div className='border-t-2 w-3/4 border-dotted'>

                </div>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a><img className='h-10' src={FbLogo} alt="facebook Logo" /></a>
                        <a><img className='h-10' src={XLogo} alt="X logo" /> </a>
                        <a><img className='h-10' src={linkedInLogo} alt="LinkedIn Logo" /> </a>
                        <a><img className='h-10' src={youtubeLogo} alt="Youtube Loge" /></a>
                    </div>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;