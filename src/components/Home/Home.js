import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import AboutUs from '../AboutUs/AboutUs';
import AllTours from '../AllTours/AllTours';
import Banner from '../Banner/Banner';
import TravelGallery from '../TravelGallery/TravelGallery';
//this is a container component
const Home = () => {
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
    if(isLoading){
        return (<div className="w-full h-screen  flex justify-center items-center">
         <ClipLoader color="#ff7c5b"  size={60} />
     </div>
            
        )
    }
    return (
        <div className="">
            <Banner/>
            <AllTours tours={tours}/>
            <div className="container">
            <hr />
            </div>
            <TravelGallery/>
            <AboutUs/>
        </div>
    );
};

export default Home;