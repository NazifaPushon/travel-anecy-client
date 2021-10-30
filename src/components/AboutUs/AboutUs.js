import { faCommentsDollar, faMapMarked, faUserTie } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Speciality from '../Speciality/Speciality';
import './AboutUs.css';

// This is about us component
//it is a static component rendered from home 
const AboutUs = () => {
    return (
        <section className="aboutUs text-gray-100 mt-20 py-10" id="aboutUs">
            <div className="container">
                <h1 className="text-white">
                    ABOUT US
                    <br />
                    <div className="w-40 pt-1 mx-auto rounded-full bg-tomato my-5"></div>
                </h1>

                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-5">
                        <div>
                            <div className="flex items-center">
                                <div className="w-32  rounded-full bg-tomato my-5 mx-0" style={{ paddingTop: "2px" }}></div>
                                <h4 className="text-xl font-semibold text-tomato ml-10">OUR HISTORY </h4>

                            </div>
                            <h2 className="text-white text-left text-5xl font-bold"> HELLO. OUR AGENCY HAS BEEN PRESENT BEST IN THE MARKET</h2>
                        </div>
                        <div>
                            <p className="text-gray-100">HOLIDAY HYPE is a travel agency that makes our tour and travel a lot more easier.
                                This company is founded in 1978 and it now gives a awsome online service .Ours founder is Jhon Dalto and co founder is Malio Marcod .We are the team of now 120 dadicated people . We can sciencarely say that our services and tour plans are the top and most loved plans in USA . We are famous for great services at a low range</p>
                        </div>
                    </div>

                    {/* statistical section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <Speciality icon={faCommentsDollar} title="AFFORDABLE PRICE" text="We give our services at the monst cheap rete" />

                        <Speciality icon={faMapMarked} title="BEST DESTINATION" text="We have a great collection of intersting tour" />

                        <Speciality icon={faUserTie} title="PERSONAL SERVICE" text="Our professional service will make you happy" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;