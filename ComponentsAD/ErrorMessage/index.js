import React from 'react';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ErrorMessage() {
    return (
        <div className="row flexBoxRowSCC">
            <div className="col-6 text-center">
                <FontAwesomeIcon className="mb-3 red" icon={faTriangleExclamation} size="7x" />
                <h3>An error has occurred. Please try again, and if the problem persists, contact the ATLAS software team.</h3>
            </div>
        </div>    
    );
}