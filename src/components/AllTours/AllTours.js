import React from 'react';
import SignleTour from '../SingleTour/SignleTour';

const AllTours = ({tours}) => {
    
    return (
        <div className="container my-20" id="tours">
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