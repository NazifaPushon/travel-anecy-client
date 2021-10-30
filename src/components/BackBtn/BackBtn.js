import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';

// this is a simple button component to direct the user to home from any components
const BackBtn = () => {
    const history = useHistory()
    return (
        <div className="text-lg my-10 text-center">
            <button onClick={() => {
                history.push('/')
            }} className="btn-1"><FontAwesomeIcon icon={faArrowLeft} className="mr-3"/> Bo Back</button>
        </div>
    );
};

export default BackBtn;