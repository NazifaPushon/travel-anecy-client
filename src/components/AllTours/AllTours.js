import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import SignleTour from '../SingleTour/SignleTour';

//This component renders all the tour and give data to singleTour component
// this component also show spinner when data is loading
const AllTours = () => {
    const [tours, setTours] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    
    useEffect(() => {
        fetch('https://whispering-chamber-87244.herokuapp.com/tours')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTours(data)
            setIsLoading(false)
        })
    } , [])

    //spinner
    if(isLoading){
        return (<div className="w-full py-20  flex justify-center items-center">
                    <ClipLoader color="#ff7c5b"  size={60} />
                </div>  
            )
    }
    return (
        <section className="container my-20" id="tours">
            <h1>All Toures</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
            {
                tours.map(tour => <SignleTour key={tour._id} data={tour}/>)
            }
            </div>
        </section>
    );
};

export default AllTours;