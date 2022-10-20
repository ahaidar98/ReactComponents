import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import { Toast } from 'react-bootstrap';

import './styles.css';


export default function ToastNoification ({ color, message }) {
    const [showToast, setshowToast] = useState(true)

    useEffect(() => {
        const timeId = setTimeout(() => {
            // After 5 seconds set the show value to false
            setshowToast(false);
        }, 5000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);

    if (showToast) {
        const transitOut = !showToast ? 'transitionOut' : '';
        return (
            <div className={`show toast align-items-center text-white ${color} border-0 mb-1 ${transitOut}`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                    <div className="toast-body">
                        <h5 className="mb-0">{message}</h5>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

ToastNoification.propTypes = {
    message: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};