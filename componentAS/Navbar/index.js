import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

import './styles.css';
import atlasLogo from '../../Assets/images/AtlasLogo.png';

const Navbar = ({ onSignOutClick, name, showUser, showProject }) => {
    const [btnToggle, setBtnToggle] = useState(false);
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setBtnToggle(false)
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
   
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <nav className="sticky-top navbar navbar-inverse bg-inverse py-2 yellowBG mb-4 Nav" ref={wrapperRef}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand black ms-3 flexBoxAllCenter" onClick={() => setBtnToggle(false)}>
                    <img src={atlasLogo} alt="Atlas Logo" width="75" />
                    <h3 className="flexBoxAllCenter flex-column mb-0 navTitle">ATLAS Scheduler</h3>
                </Link>
                <div>
                    <h4 className="mb-0 d-inline-block mx-4 navUserName" >{name}</h4>
                    <button className="navbarBtn" type="button" onClick={() => setBtnToggle(!btnToggle) }>
                        <span className="navbar-toggler-icon"><FontAwesomeIcon icon={!btnToggle ? faBars : faTimes} size="lg" /></span>
                    </button>
                </div>
                {btnToggle ?
                    <div className="col-12 renderFadeIn">
                        <ul className=" navbar-nav mr-auto mt-2 ps-4 navList">
                            {/*showProject ?
                                <li className="nav-item active mt-1" onClick={() => setBtnToggle(false)}>
                                    <Link to="create-project" className="nav-link border-0 black"><h5 className="m-0">Add Project</h5></Link>
                                </li>
                                : null
                            */}
                            <li className="nav-item">
                                <h5 className="d-none navMobileMenuName floatRight mb-0 mt-1 pe-1">{name}</h5>
                            </li>
                            <li className="nav-item" onClick={() => setBtnToggle(false)}>
                                <Link to="/" className="nav-link border-0 black"><h5 className="m-0">Calendar</h5></Link>
                            </li>
                            {showUser ?
                                <>
                                    <li className="nav-item" onClick={() => setBtnToggle(false)}>
                                        <Link to="create-user" className="nav-link border-0 black"><h5 className="m-0">Add User</h5></Link>
                                    </li>
                                    <li className="nav-item" onClick={() => setBtnToggle(false)}>
                                        <Link to="labs" className="nav-link border-0 black"><h5 className="m-0">Labs</h5></Link>
                                    </li>
                                </>
                            :
                                null
                            }
                            <li className="nav-item" onClick={() => setBtnToggle(false)}>
                                <Link to="profile" className="nav-link border-0 black"><h5 className="m-0">Profile</h5></Link>
                            </li>
                            <li className="nav-item" onClick={() => setBtnToggle(false)}>
                                <button onClick={onSignOutClick} className="nav-link border-0 yellowBG mb-1"><h5 className="m-0">Sign Out</h5></button>
                            </li>
                        </ul>
                    </div>
                :
                    null
                }
            </div>
        </nav>
    );
};

/*
Navbar.propTypes = {
    
};

Navbar.defaultProps = {
   
};
*/

export default Navbar;