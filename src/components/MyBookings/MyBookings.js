import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import BackBtn from '../BackBtn/BackBtn';
import SingleBookings from '../SingleBookings/SingleBookings';

// this component will show tours of logged in user 
// that user can cancel the tour
// gives data to singleBooking components
const MyBookings = () => {
    const {user} = useAuth()
    const [bookings , setBookings] = useState([])
    useEffect(() => {
        fetch(`https://whispering-chamber-87244.herokuapp.com/myBookings/${user.email}`)
        .then(res => res.json())
        .then(data => setBookings(data))
    } , [user])

    // functionality for delete
    const handleClick = (id) => {
        Swal.fire({
            icon:'warning',
            title: 'Do you want to delete the booking',
            confirmButtonText: 'Yes',
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://whispering-chamber-87244.herokuapp.com/deleteBooking/${id}` , {
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
        <div className="container my-10 min-h-screen">
            <h1 className="my-5">MY BOOKINGS</h1>
            {
                bookings.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
                {
                    bookings.map(booking => <SingleBookings data={booking} handleClick={handleClick} key={booking._id}/>)
                }
            </div> : <h2 className="text-2xl text-center text-red-500">You don't book any tours</h2>
            }
            <BackBtn/>
        </div>
    );
};

export default MyBookings;