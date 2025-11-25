
import React, { useEffect, useState } from 'react';

import { Link, useLoaderData } from 'react-router';
import { getItemFromLS } from '../LocalStorage';
import Bookings from '../../Components/Booking/Bookings';
import Chart from '../../Components/Charts/Chart';

const FinalPage = () => {
    // const {id}  = useParams();
    // console.log(id); 
    const [appointments, setAppointments] = useState([]);
    const data = useLoaderData();
    // console.log(data ) ;

    useEffect(() => {
        const LsItems = getItemFromLS();
        // console.log(LsItems);
        const ConvertedData = LsItems.map(item => parseInt(item))
        // console.log(ConvertedData);
        const selectedItems = data.filter(d => ConvertedData.includes(d.id));
        // console.log(selectedItems);

        setAppointments(selectedItems);
    }, [])

    const cancleAppointment = (id) => {
        const cancleItem = appointments.filter(book => book.id !== id);
        setAppointments(cancleItem)
    }




    if (appointments.length === 0) {
        return [<div className='flex flex-col items-center my-10'>
            <h2 className='text-3xl font-bold'>  You have not booked your appointment yet   </h2>
            <p className='my-5'>
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
            </p>
            <button className='btn bg-blue-600'>  <Link to={"/"}> Book An Appointment </Link>  </button>
        </div>]


    }


    return (
        <div>
            {/* <Charts></Charts> */}
            <div className='flex flex-col items-center bg-white mx-60 p-10 rounded-2xl'>
                <Chart appointments={appointments}></Chart>
            </div>
            
            
            <div>
                <div className='flex flex-col items-center'>
                    <h1 className='mt-10 font-bold text-2xl'>My Today Appointments</h1>
                    <p className='my-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                    {/* {appointments.length} */}
                    <div className='flex flex-col items-center gap-10 p-5 m-5 ' >
                        {
                            appointments.map(bookmark => <Bookings cancleAppointment={cancleAppointment} bookmark={bookmark}></Bookings>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalPage;