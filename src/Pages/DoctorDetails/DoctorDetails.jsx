import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import infoIcon from "../../../DocPic/information.png"
import iconR from "../../../DocPic/registered.png"
import { addItemToLS } from "../LocalStorage.js"


const DoctorDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const parseId = parseInt(id);
    const selectedDoctor = data.find(d => d.id === parseId)


    const handleAppoinrment = (id) => {
        addItemToLS(id)

    };

    


    return (
        <div>
            {/* {data.length} */}
            <div className='my-10 bg-white mx-10 py-10 rounded-2xl flex flex-col items-center'>

                <h1 className='font-bold mb-2'>Doctor’s Profile Details</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus <br /> facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>
            <div className='my-10 bg-white mx-10 py-10 rounded-2xl flex justify-start gap-5 '>
                <div>
                    <img className='h-90 ml-10' src={selectedDoctor.image} alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='font-bold text-2xl'>{selectedDoctor.name}</h1>
                    <p >{selectedDoctor.education}</p>
                    <p>Working at</p>
                    <p className='font-semibold text=xl'>{selectedDoctor.workingAt}</p>
                    <div className='border-t-2 border-dotted'></div>
                    <p> <p className='flex gap-2 items-center'> <img src={iconR} alt="IconR" className='h-5' /> {selectedDoctor.registrationNumber}</p></p>
                    <div className='border-t-2 border-dotted '></div>
                    <div className='flex gap-2 '>
                        <p className='font-bold'>Ability :</p>
                        <div className=''> {selectedDoctor.availabity.map(ab => ab)}</div>

                    </div>
                    <div > <span className='font-bold'> Consultation Fee: </span>  <span className='text-blue-800'>Taka : {selectedDoctor.fee}</span> (incl. Vat) <span className='text-blue-400'>perconsuitation
                    </span> </div>
                </div>

            </div>
            <div className='my-10 bg-white mx-10 py-10 rounded-2xl ' >
                <div className='flex flex-col items-center'>
                    <div>

                    </div>
                    <h1 className='font-bold text-3xl'>Book an Appointment</h1>

                </div>
                <div className='border-t-2 border-dotted m-5'></div>
                <div className='flex justify-between px-10'>
                    <p className='font-bold'>Availability</p>
                    <p className='bg-green-400 text-green-800 p-2 rounded-2xl'>Doctor Available Today</p>
                </div>
                <div className='border-t-2 border-dotted m-5'></div>
                <div className='px-20'>

                    <div className='bg-amber-300 text-amber-700 my-5 flex items-center rounded-2xl '>
                        <img className='h-8' src={infoIcon} alt="" />
                        <small>
                            Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                        </small>
                    </div>
                </div>
                <div className='flex flex-col items-center'>

                    <button className='btn rounded-4xl w-7/8' onClick={() => { handleAppoinrment(id) }}>

                        Book Appointment Now

                    </button>
                    <ToastContainer></ToastContainer>
                </div>


            </div>
        </div>
    );
};

export default DoctorDetails;