import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

import './styles.css';

const SignedOutNavbar = () => {
    return (
        <nav className="navbar navbar-inverse bg-inverse py-2 yellowBG mb-5 Nav">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand black"><h2>NIAR Scheduler</h2></Link>
                <div>
                    <Link to="login" className="nav-link border-0 black"><h5>Login</h5></Link>
                </div>
            </div>
        </nav>
    );
};

/*
SignedOutNavbar.propTypes = {
    
};

v.defaultProps = {
   
};
*/

export default SignedOutNavbar;