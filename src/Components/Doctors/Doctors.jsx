import React, { Suspense } from 'react';
import Doctor from './Doctor/Doctor';
import CountDown from '../CountDown/CountDown';

const Doctors = ({data}) => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl font-bold mt-10'>Our Best Doctors</h1>
                <p className='my-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <div>
                    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {data.map(doctor => <Doctor doctor={doctor}></Doctor>)}
                    </div>
                    </Suspense>
                </div>
                <div>
                    <CountDown></CountDown>
                </div>
            </div>
        </div>
    );
};

export default Doctors;