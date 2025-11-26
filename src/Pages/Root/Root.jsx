import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';





const Root = () => {
    useEffect(()=>{
        document.title = `Doc-Tab` ;
    },[])

    
    return (
        <div className='bg-gray-200'>
            <Header></Header>
            <Outlet ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;