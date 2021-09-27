import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import './styles.css';
import Toast from '../Toast';


const ActionNotifications = ({ msgArray, removeMessageFunc }) => {
    const onCloseToastClick = (message, color) => {
        removeMessageFunc({ message, color })
    }
    return (
        <div aria-live="polite" aria-atomic="true" style={{ position: 'relative', zIndex: 2000 }}>
            {msgArray.length > 0 ?
                <div style={{ position: 'fixed', top: '15px', right: '30px' }}>
                    {msgArray.map((msg, i) =>
                        msg.message.map((message) => {
                            return <Toast key={i} BodyText={message} color={msg.color} onCloseToastClick={onCloseToastClick} />;
                        })
                    )}
                </div>
                :
                null
            }
        </div>
    );
}

ActionNotifications.propTypes = {
    msgArray: PropTypes.array.isRequired,
    removeMessageFunc: PropTypes.func.isRequired,
};

ActionNotifications.defaultProps = {

};

export default ActionNotifications;