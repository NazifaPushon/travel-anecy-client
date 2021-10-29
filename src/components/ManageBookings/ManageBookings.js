import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import UserBooking from '../UserBooking/UserBooking';

const ManageBookings = () => {
    const [bookings , setBookings] = useState([])
    const [isUpdated , setIsUpdated] = useState(false)
    useEffect(() => {
        fetch('https://whispering-chamber-87244.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => {
            setIsUpdated(false)
            setBookings(data)
            console.log(data)
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

    const handleDelete = (id) => {
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
                    Swal.fire('Your booking is deleted', '', 'success')
                    const newMybooking = bookings.filter(booking => booking._id !== id)
                    setBookings(newMybooking)
                })
              
            } 
          })
    }
    return (
        <div className="container ">
            <h1 className="">Manage All Bookings </h1>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
            {
                bookings.map(booking => <UserBooking booking={booking} key={booking._id} handleDelete={handleDelete} handleUpdateStatus={handleUpdateStatus}/>)
            }
            </div>
        </div>
    );
};

export default ManageBookings;