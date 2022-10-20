import React, { useState } from 'react';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ToggleButton({ isToggleOn, onClick, text }) {
    const [state, setState] = useState({
        isToggleOn: false,
    });

    const acttiveToggle = isToggleOn ? 'green' : '';

    return (
        <div className="centerFlexBoxWItems pointer">
            <div className="d-inline-block" onClick={onClick}>
                <FontAwesomeIcon className={`${acttiveToggle} me-3`} size="3x" icon={isToggleOn ? faToggleOn : faToggleOff} />
            </div>
            <div className="d-inline-block">
                <h5 className="mb-0" style={{ fontWeight: 'normal' }}>{text}</h5>
            </div>        
        </div>
    );
}