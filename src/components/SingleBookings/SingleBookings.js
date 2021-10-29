import { faClock, faMap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleBookings = ({data , handleClick}) => {
    const {date , status , tour , address , _id} = data
    const {destination ,  location ,time ,img } = tour
    
    return (
        <div className="card">
            <div>
                <img alt="" className="w-full h-60"  src={img}/>
            </div>
            <div className="p-10">
                <h2 className="text-2xl font-bold">{destination}</h2>
                <p className="my-3"><span className="font-semibold">Date : </span>{date} </p>
                <p className="my-3"><span className="font-semibold">Address : </span>{address} </p>
                <p className="my-3"><span className="font-semibold">Status : </span> <span className="bg-tomato px-3 py-1 text-white rounded-full">{status}</span> </p>
                <div className="my-5 block md:flex p-3 bg-gray-100 rounded-lg text-gray-500 font-medium justify-around">
                    <div>
                        <FontAwesomeIcon icon={faClock} className="mr-2"/>
                        {time} days 
                    </div>
                    <div>
                        |
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faMap} className="mr-2"/>
                        {location}
                    </div>
                </div>
                
                <div className="text-center" onClick={() => handleClick(_id)}><button className="btn-2" >Cancel Booking</button></div>
            </div>
        </div>
    );
};

export default SingleBookings;