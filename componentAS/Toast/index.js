import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Toast } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './styles.css';


const ToastNoification = ({ color, onCloseToastClick, BodyText }) => {
    //const [show, setShow] = useState(true);

    const onToastClose = () => {
        let array = [];
        array.push(BodyText)

        onCloseToastClick(array, color);
        //setShow(false);
    }

    return (
        <Toast
            onClose={() => onToastClose()}
            //show={show}
            // delay={9000}
            autohide
            className={`my-1 align-items-center text-white ${color} border-0 boxShadowWrapper`}
        >
            <Toast.Body>
                <div className="row mb-1 border-solid-g-b">
                    <div className="col-12">
                        <h6 className="toastTitle mb-0">Notification</h6>
                        <div
                            type="button"
                            className="pointer white floatRight"
                            aria-label="Close"
                            onClick={() => onToastClose()}
                        >
                            <FontAwesomeIcon icon={faTimes} size="lg" />
                        </div>
                    </div>
                </div>
                <h5 className="mb-0 pb-1 pt-2">{BodyText}</h5>
            </Toast.Body>
        </Toast>
    );
}

ToastNoification.propTypes = {
    BodyText: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onCloseToastClick: PropTypes.func.isRequired
};

ToastNoification.defaultProps = {

};

export default ToastNoification;