import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Statistic.css';
const Statistic = ({icon , title , text}) => {
    return (
        <div className="grid grid-cols-4 text-white items-center gap-3 my-10  p-5 rounded-lg bg-color">
            <div className="text-5xl text-center">
            <FontAwesomeIcon icon={icon} className="text"/>
            </div>
            <div className="col-span-3">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Statistic;