import React, { Suspense, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';


const Root = () => {
    useEffect(() => {
        document.title = `Doc-Tab`;
    }, [])


    return (
        <div className='bg-gray-200'>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <Header></Header>
                <Outlet ></Outlet>
                <Footer></Footer>
            </Suspense>
        </div>
    );
};

export default Root;