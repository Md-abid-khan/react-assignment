import React from 'react';
import { useLoaderData } from 'react-router';
import Blogs from './Blogs';

const BLog = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='flex flex-col gap-10 p-10 m-2'>
            {
                data.map(d=> <Blogs d={d}></Blogs>)
            }
        </div>
    );
};

export default BLog;