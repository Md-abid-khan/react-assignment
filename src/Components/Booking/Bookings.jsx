import React from 'react';
// import { removeitemLS } from '../../Pages/LocalStorage';


const Bookings = ({ bookmark, cancleAppointment }) => {


    return (
        <div className=''>
            <div className='flex flex-col items-center gap-5 bg-white rounded-2xl w-200'>

                <div className='flex justify-around items-center gap-50 p-5 '>
                    <div>
                        <div>{bookmark.name}</div>
                        <p>{bookmark.education}</p>
                    </div>
                    <div>
                        Appointment Fee:{bookmark.fee}Taka + VAT
                    </div>
                </div>

                {/* <div onClick={()=> {removeitemLS(bookmark.id)}}>

                    
                </div> */}

                <button onClick={() => { cancleAppointment(bookmark.id) }} className='btn w-8/10 rounded-2xl mb-5 border-2 border-red-300 text-red-500'> Cancle Appointmnent  </button>


            </div>
        </div>
    );
};

export default Bookings;