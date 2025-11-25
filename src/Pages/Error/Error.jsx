import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


const Error = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex flex-col items-center my-20 gap-5'>
                <h1 className='text-3xl font-extrabold'>Sorry</h1>
            <p className='text-xl font-semibold'>You are on wrong direction</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;