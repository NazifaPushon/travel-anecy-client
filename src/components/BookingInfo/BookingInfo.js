import { faClock, faMap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const BookingInfo = () => {
    const { user } = useAuth();
    const [tour, setTour] = useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/singleTour/${id}`)
            .then(res => res.json())
            .then(data => setTour(data))
    }, [id])
    return (

        <div className="container my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <div>
                        <img alt="" className="w-full h-80" src={tour.img} />
                    </div>
                    <div className="my-10">
                        <h2 className="text-2xl font-bold">{tour.destination}</h2>
                        <p className="text-gray-600 my-3"><span className="text-xl font-bold text-tomato">$ {tour.price}</span> / per person</p>
                        <div className="my-3">
                            <span className="font-semibold">Time</span> :  <FontAwesomeIcon icon={faClock} className="mr-2" />
                            {tour.time} days
                        </div>

                        <div className="my-3">
                            <span className="font-semibold">Location</span> : <FontAwesomeIcon icon={faMap} className="mr-2" />
                            {tour.location}
                        </div>
                        <p className="text-gray-600"><span className="font-semibold">Description</span> : {tour.description}</p>
                    </div>
                </div>
                <div className="p-5 border border-gray-300 rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.email} {...register("email" , { required: true })} type="email" className="input" placeholder="email"/>
                        {errors.email && <span className="text-red-600">Email Is Required</span>}

                        <input defaultValue={user.displayName} {...register("name" , { required: true })} type="text" className="input" placeholder="User Name"/>
                        {errors.email && <span className="text-red-600">Name Is Required</span>}

                        <textarea {...register("adress" , { required: true })} type="text" className="input" placeholder="Your Address" cols="30" rows="5"></textarea>
                        {errors.adress && <span className="text-red-600">Address Is Required</span>}
                        
                        <input  {...register("date" , { required: true })} type="date" className="input" placeholder="User Name"/>
                        {errors.date && <span className="text-red-600">date Is Required</span>}

                        <input  {...register("contuct" , { required: true })} type="number" className="input" placeholder="Contuct Nubmer"/>
                        {errors.contuct && <span className="text-red-600">contuct Number Is Required</span>}

                        <input defaultValue={tour.destination} readOnly type="text" className="input" />
                        
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingInfo;