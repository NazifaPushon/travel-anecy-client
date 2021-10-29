import React from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const history= useHistory()
    const { user ,logOut } = useAuth();
    return (
        <div className="bg-dark-blue  text-white text-xl text-center">
            <div className="container grid grid-cols-1 lg:grid-cols-4 items-center">
                <div className="text-4xl font-semibold text-tomato">HOLYDAY HYPE</div>
                <div className="col-span-3 block md:flex justify-end items-center ">
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
                                <NavLink to="/addTour">Add Tour</NavLink>
                            </div>
                            <div className="m-5">
                                <button className="header-btn" onClick={() => {
                                    logOut()
                                    history.push('/')
                                }}>Log Out</button>
                            </div>
                        </> : <>
                            <div className="m-5">
                                <NavLink to="/signIn">
                                    <button className="header-btn">Sign In</button>
                                </NavLink>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;