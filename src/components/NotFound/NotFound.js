import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import BackBtn from '../BackBtn/BackBtn';
import './notfound.css';
//simple not found page
const NotFound = () => {
    return (
        <div className="bg h-screen text-center text-white">
            <div className="py-20">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-9xl"/>
                <h1 className="text-white">Opps ! Page Not Found</h1>
                <BackBtn/>
            </div>
        </div>
    );
};

export default NotFound;