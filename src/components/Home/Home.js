import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AllTours from '../AllTours/AllTours';
import Banner from '../Banner/Banner';
import TravelGallery from '../TravelGallery/TravelGallery';
//this is a container component home page
const Home = () => {
    return (
        <div>
            <Banner/>
            <AllTours />
            <div className="container">
            <hr />
            </div>
            <TravelGallery/>
            <AboutUs/>
        </div>
    );
};

export default Home;