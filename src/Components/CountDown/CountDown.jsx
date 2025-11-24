import React from 'react';
import doctorImage from "../../../git/B11A08-router-warrior/C001-assets/success-doctor.png"
import reviewImage from "../../../git/B11A08-router-warrior/C001-assets/success-review.png"
import patientImage from "../../../git/B11A08-router-warrior/C001-assets/success-patients.png"
import stuffImage from "../../../git/B11A08-router-warrior/C001-assets/success-staffs.png"

const CountDown = () => {
    return (
        <div>
            <h1 className='text-3xl mt-15 mb-5 font-bold'>We Provide Best Medical Services</h1>
            <p className='mb-10'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            <div className='flex justify-around'>
                <div className='w-62 h-60 bg-blue-400  rounded-2xl flex flex-col p-10'>
                    <img className='h-15 w-15' src={doctorImage} alt="" />
                    <div></div>
                    <div className='flex font-semibold text-xl'>Total Doctors</div>
                </div>
                <div className='w-62 h-60 bg-blue-400  rounded-2xl flex flex-col p-10'>
                    <img className='h-15 w-15' src={reviewImage} alt="" />
                    <div></div>
                    <div className='flex font-semibold text-xl'>Total Reviews</div>
                </div>
                <div className='w-62 h-60 bg-blue-400  rounded-2xl flex flex-col p-10'>
                    <img className='h-15 w-15' src={patientImage} alt="" />
                    <div></div>
                    <div className='flex font-semibold text-xl'>Patients</div>
                    
                </div>
                    <div className='w-62 h-60 bg-blue-400  rounded-2xl flex flex-col p-10'>
                        <img className='h-15 w-15' src={stuffImage} alt="" />
                        <div></div>
                        <di className='flex font-semibold text-xl'>Total Stuffs</di>
                    </div>
            </div>
        </div>
    );
};

export default CountDown;