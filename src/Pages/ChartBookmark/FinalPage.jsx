
import React, { useEffect, useState } from 'react';

import { Link, useLoaderData } from 'react-router';
import { getItemFromLS } from '../LocalStorage';
import Bookings from '../../Components/Booking/Bookings';
import Chart from '../../Components/Charts/Chart';
import { toast } from 'react-toastify';

const FinalPage = () => {
    const [appointments, setAppointments] = useState([]);

    const data = useLoaderData();
    const notified = (msg) => toast(msg);

    useEffect(() => {
        const LsItems = getItemFromLS();
        const ConvertedData = LsItems.map(item => parseInt(item))
        const selectedItems = data.filter(d => ConvertedData.includes(d.id));
        setAppointments(selectedItems);
    }, [])

    const cancleAppointment = (id) => {
        const cancelItem = appointments.filter(book => book.id !== id);
        setAppointments(cancelItem);
        notified(`Appointment Cancel`);
        const StoredItem = localStorage.getItem("bookMarks")
        const storedItemParse = JSON.parse(StoredItem);
        const particularStoredItems = storedItemParse.find(item => item == id)
        const removedId = storedItemParse.filter(book => book !== particularStoredItems);
        const stringyRemoveId = JSON.stringify(removedId)
        localStorage.setItem("bookMarks", stringyRemoveId)
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
            <div className='flex flex-col items-center bg-white mx-60 p-10 rounded-2xl'>
                <Chart appointments={appointments}></Chart>
            </div>
            <div>
                <div className='flex flex-col items-center'>
                    <h1 className='mt-10 font-bold text-2xl'>My Today Appointments</h1>
                    <p className='my-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                    <div>
                        <div className='flex flex-col items-center gap-10 p-5 m-5 ' >
                            {
                                appointments.map(bookmark => <Bookings cancleAppointment={cancleAppointment} bookmark={bookmark}></Bookings>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalPage;