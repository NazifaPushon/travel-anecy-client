import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3  h-full py-20 ">
                <div className="col-span-2 ">
                    <h1 className="title">Feel The</h1>
                    <h1 className="title">Freedom To Travel</h1>
                    <h1 className="title">with <span className="text-tomato">HOLYDAY HYPE</span></h1>
                    <p className="my-10 text-gray-200">Travel agents offer advice on destinations, plan trip itineraries, and make travel arrangements for clients. Travel agents sell transportation, lodging, and admission.</p>
                    <button className="btn-1 my-5">
                        Our Tours
                    </button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;