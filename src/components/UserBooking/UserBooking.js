import React from 'react';

const UserBooking = ({booking , handleUpdateStatus , handleDelete}) => {

    const {_id , name , email , tour , date , status ,img} = booking
    
    return (
        <div className="card text-md " key={_id}>
                    <div className="flex justify-between  items-center  p-5">
                        <div>
                            <img src={img} alt="" className="w-16 h-16 rounded-full "/>
                        </div>
                        <div>
                            <p>{name}</p>
                            <p>{email}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="p-5">
                        <p className="text-2xl font-semibold  "> {tour.destination}</p>
                        <p className="my-3">Date : {date}</p>
                        <p className="my-3">Status : <span className={status === 'pending' ? 'px-3 py-2 rounded-full bg-tomato text-white' : 'p-2  rounded-full bg-green-200 text-green-600'}>
                        {booking.status}
                            </span></p>
                    </div>
                    <div className=" grid grid-cols-2 text-center ">
                        <div className="bg-dark-blue text-white  py-3" >
                            <button  className="w-full" onClick={() => handleUpdateStatus(booking._id , booking)}>Update Satus</button>
                        </div>
                        <div className="bg-tomato text-white py-3">
                           <button className="w-full" onClick={() => handleDelete(booking._id)}> Delete</button>
                        </div>
                    </div>
                </div>
    );
};

export default UserBooking;