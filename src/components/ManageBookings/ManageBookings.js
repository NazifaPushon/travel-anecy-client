import React, { useEffect, useState } from 'react';

const ManageBookings = () => {
    const [bookings , setBookings] = useState([])
    const [isUpdated , setIsUpdated] = useState(false)
    useEffect(() => {
        fetch('https://whispering-chamber-87244.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => {
            setIsUpdated(false)
            setBookings(data)
        })
    } , [isUpdated])

    const handleUpdateStatus = (id , booking) => {
        console.log(id , booking)
        const updatedBooking = {
            ...booking,
            status : 'approved'
        }
        console.log(updatedBooking)
        fetch(`https://whispering-chamber-87244.herokuapp.com/updateStatusBooking/${id}` , {
            method : "PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(updatedBooking)
        })
        .then(res => res.json())
        .then(data =>{
            setIsUpdated(true)
        })
    }
    return (
        <div className="container ">
            <h1 className="">Manage All Bookings </h1>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
            {
                bookings.map(booking => <div className="card text-md " key={booking._id}>
                    <div className="flex justify-between  items-center  p-5">
                        <div>
                            <img src={booking.img} alt="" className="w-16 h-16 rounded-full "/>
                        </div>
                        <div>
                            <p>{booking.name}</p>
                            <p>{booking.email}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="p-5">
                        <p className="text-2xl font-semibold  "> {booking.tour.destination}</p>
                        <p className="my-3">Date : {booking.date}</p>
                        <p className="my-3">Status : <span className={booking.status === 'pending' ? 'px-3 py-2 rounded-full bg-tomato text-white' : 'p-2  rounded-full bg-green-200 text-green-600'}>
                        {booking.status}
                            </span></p>
                    </div>
                    <div className=" grid grid-cols-2 text-center ">
                        <div className="bg-dark-blue text-white  py-3" >
                            <button  className="w-full" onClick={() => handleUpdateStatus(booking._id , booking)}>Update Satus</button>
                        </div>
                        <div className="bg-tomato text-white py-3">
                           <button className="w-full"> Delete</button>
                        </div>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default ManageBookings;