import React, { Suspense, useState } from 'react';
import Doctor from './Doctor/Doctor';
import CountDown from '../CountDown/CountDown';


const Doctors = ({data }) => {
    const [seeMore,setSeeMore] = useState(false);

    const visibleData = seeMore ? data : data.slice(0,6);
    // console.log(visibleData);
    // console.log(seeMore);
    return (
        <div>
            <div className='flex flex-col items-center'>
                <h1 className='text-5xl font-bold mt-10'>Our Best Doctors</h1>
                <p className='my-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <div className=''>
                    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {visibleData.map(doctor => <Doctor doctor={doctor}></Doctor>)}
                    </div>
                    </Suspense>
                    <div className='flex flex-col items-center m-5'>
                        {data.length >= 6 && ( <button className='btn bg-blue-600' onClick={() => setSeeMore(!seeMore)}> 
                            {
                                seeMore? "Show Less Doctor": "Show All Doctor"  
                            }
                             </button> )}
                    </div>
                </div>
                <div>
                    <CountDown></CountDown>
                    
                </div>
            </div>
        </div>
    );
};

export default Doctors;