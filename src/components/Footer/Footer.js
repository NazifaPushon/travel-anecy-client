import React from 'react';
import { HashLink } from 'react-router-hash-link';
const Footer = () => {
    return (
        <div className="bg-gray-700 text-white text-lg relative bottom-0">
            <div className="container py-10 ">
                <div className="grid grid-cols-1 md:grid-cols-4">
                    <div>
                        <h2 className="text-3xl text-tomato font-semibold">HOLYDAY HYPE</h2>
                    </div>
                    <div className="col-span-3 block md:flex justify-end items-center">
                        <div className="m-5">
                            <HashLink to="/">Home</HashLink>
                        </div>
                        <div className="m-5">
                            <HashLink to="#tours">Tours</HashLink>
                        </div>
                        <div className="m-5">
                            <HashLink to="#gallery">Gallery</HashLink>
                        </div>
                        <div className="m-5">
                            <HashLink to="#aboutUs">About Us</HashLink>
                        </div>
                    </div>
                </div>
                <p className="text-center">&copy; All Rights Reserved by HOLYDAY HYPE</p>
            </div>
        </div>
    );
};

export default Footer;