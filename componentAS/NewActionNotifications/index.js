import React, { useState, useEffect } from 'react';

//import './styles.css';
import Toast from '../NewToast';

export default function ActionNotifications({ arrayOfToasts }) {
    const [state, setState] = useState({
        notifications: arrayOfToasts
    });

    console.log('notif: ', arrayOfToasts)

    useEffect(() => {
        setState({ ...state, notifications: arrayOfToasts })
    }, [arrayOfToasts]);

    return (
        <div aria-live="polite" aria-atomic="true" style={{ position: 'relative', zIndex: 2000 }}>
            {arrayOfToasts &&
                <div style={{ position: 'fixed', top: '15px', right: '30px' }}>
                    {state.notifications.map((toast, i) => {
                        const color = toast.isMessageInGDStanding ? 'greenBG' : 'redBG';

                        return <Toast key={i} message={toast.message} color={color} />;
                    })}
                </div>
            }
        </div>
    );
}