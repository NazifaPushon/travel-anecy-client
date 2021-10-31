import React from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

// this is header or nav component 
// from here one user can log out
const Header = () => {
    const history = useHistory()
    const { user, logOut } = useAuth();
    return (
        <nav className="bg-dark-blue  text-white  text-center">
            <div className="container grid grid-cols-1 lg:grid-cols-4 items-center">
                <div className="text-4xl font-semibold text-tomato">HOLIDAY HYPE</div>
                <div className="col-span-3 block md:flex justify-end items-center ">
                    {/* navigations */}
                    <div className="m-5">
                        <NavLink to="/">Home</NavLink>
                    </div>
                    {
                        user.email ? <>
                            <div className="m-5">
                                <NavLink to="/myBookings">My Bookings</NavLink>
                            </div>

                            <div className="m-5">
                                <NavLink to="/manageBookings">Manage All Bookings</NavLink>
                            </div>
                            <div className="m-5">
                                <NavLink to="/addTour">Add a Tour</NavLink>
                            </div>
                            <div className="m-5">
                                {user.displayName}
                            </div>
                            <div className="m-5">
                                <button className="header-btn" onClick={() => {
                                    logOut()
                                    history.push('/')
                                }}>Log Out</button>
                            </div>
                        </> : <>

                            <div className="m-5">
                                <HashLink to="#tours">
                                    All Tours
                                </HashLink>
                            </div>
                            <div className="m-5">
                                <HashLink to="#gallery">
                                    Gallery
                                </HashLink>
                            </div>
                            <div className="m-5">
                                <HashLink to="#aboutUs">
                                    About Us
                                </HashLink>
                            </div>
                            <div className="m-5">
                                <NavLink to="/signIn">
                                    <button className="header-btn">Sign In</button>
                                </NavLink>
                            </div>
                        </>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;