import React from 'react';
import AllTours from '../AllTours/AllTours';
import Banner from '../Banner/Banner';
//this is a container component
const Home = () => {
    return (
        <div className="">
            <Banner/>
            <AllTours/>
        </div>
    );
};

export default Home;