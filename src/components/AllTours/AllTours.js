import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import SignleTour from '../SingleTour/SignleTour';

const AllTours = () => {
    const [tours, setTours] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    
    useEffect(() => {
        fetch('http://localhost:5000/tours')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTours(data)
            setIsLoading(false)
        })
    } , [])
    if(isLoading){
        return (<div className="w-full  flex justify-center items-center">
         <ClipLoader color="#000000"  size={60} />
     </div>
            
        )
    }
    return (
        <div className="container">
            <h1>All Toures</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
            {
                tours.map(tour => <SignleTour key={tour._id} data={tour}/>)
            }
            </div>
        </div>
    );
};

export default AllTours;