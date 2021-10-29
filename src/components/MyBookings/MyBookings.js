import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import SingleBookings from '../SingleBookings/SingleBookings';

const MyBookings = () => {
    const {user} = useAuth()
    const [bookings , setBookings] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myBookings/${user.email}`)
        .then(res => res.json())
        .then(data => setBookings(data))
    } , [user])

    const handleClick = (id) => {
        Swal.fire({
            icon:'warning',
            title: 'Do you want to delete the booking',
            confirmButtonText: 'Yes',
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteBooking/${id}` , {
                    method:"DELETE"
                }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    Swal.fire('Your booking is deleted', '', 'success')
                    const newMybooking = bookings.filter(booking => booking._id !== id)
                    setBookings(newMybooking)
                })
              
            } 
          })
    }
    return (
        <div className="container my-10">
            <h1 className="my-5">MY BOOKINGS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
                {
                    bookings.map(booking => <SingleBookings data={booking} handleClick={handleClick} key={booking._id}/>)
                }
            </div>
        </div>
    );
};

export default MyBookings;