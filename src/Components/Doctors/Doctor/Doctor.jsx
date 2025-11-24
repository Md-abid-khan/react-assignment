import React from 'react';
import IconR from "../../../../DocPic/registered.png"

const Doctor = ({ doctor }) => {
    const { button, education, experience, id, image, name, registrationNumber, speciality } = doctor;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm rounded-2xl">

                <figure className="p10">
                    <img
                        src={image}
                        alt="Doctor's Image"
                        className="rounded-xl w-110 h-80" />
                </figure>
                <div className='flex gap-5 pt-2 py-2 mt-2'>
                    <div className='bg-green-300 rounded-3xl p-2'>Available</div>
                    <div className='bg-blue-400 rounded-3xl p-2'>{experience}+ Years Experience  </div>
                </div>
                <div  className='flex flex-col gap-2'>
                    <h2 className="text-2xl font-bold flex">{name}</h2>
                    <h2 className='font-semibold flex'>{education}</h2>
                    <div className='border-t-2 w-75 border-dotted'></div>
                    <p className='flex gap-2 items-center'> <img src={IconR} alt="IconR" className='h-5' /> {registrationNumber}</p>
                    <button className="btn w-full rounded-4xl">{button}</button>
                </div>
            </div>

        </div>
    );
};

export default Doctor;