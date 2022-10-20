import React, { useRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTimes, faUserPlus, faChartColumn, faBars, faSignOutAlt, faWarehouse, faClipboardList, faBuilding } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
import atlasLogo from '../../Assets/images/AtlasLogo.png';
import useAuth from "../../Hooks/useAuth";

export default function RenderNavbar({ isAdmin }) {
    const [btnToggle, setBtnToggle] = useState(false),
        navigate = useNavigate(),
        wrapperRef = useRef(null),
        auth = useAuth();

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

    const Logout = () => {
        auth.logout();
        navigate('/login');
    }

    useOutsideAlerter(wrapperRef);

    return (
        <nav className="sticky-top navbar py-2 whiteBG Nav" id="navbar" ref={wrapperRef}>
            <div className="container-fluid">
                <div className="navbar-brand black ms-3 flexBoxAllCenter" onClick={() => { setBtnToggle(false); navigate('/dashboard'); }}>
                    <img src={atlasLogo} alt="Atlas Logo" width="50" />
                </div>
                <div>
                    <button className="navbarBtn" type="button" onClick={() => setBtnToggle(!btnToggle)}>
                        <span className="navbar-toggler-icon"><FontAwesomeIcon icon={!btnToggle ? faBars : faTimes} size="lg" /></span>
                    </button>
                </div>
                {btnToggle ?
                    <div className="col-12 renderFadeIn navContent ltGrayBG">
                        <ul className="nav flex-column my-4 mx-3 navList">
                            <li className="row g-0">
                                <NavLink exact to="/dashboard" activeClassName="activeLink" className="navLink black" onClick={() => setBtnToggle(false)} end>
                                    <div className="col-7 offset-5 flexBoxFCItems">
                                        <FontAwesomeIcon className="navIcon" size="lg" icon={faChartColumn} />
                                        <div className="navText">Dashboard</div>
                                    </div>
                                </NavLink >
                            </li>
                            {isAdmin &&
                                <>
                                    <li className="row">
                                        <NavLink to="/upload/data" activeClassName="activeLink" className="navLink black" onClick={() => setBtnToggle(false)} end>
                                            <div className="col-7 offset-5 flexBoxFCItems">
                                                <FontAwesomeIcon className="navIcon" size="2x" icon={faUpload} />
                                                <div className="navText">Add Hours</div>
                                            </div>
                                        </NavLink >
                                    </li>
                                    <li className="row">
                                        <NavLink to="/companies" activeClassName="activeLink" className="navLink black" onClick={() => setBtnToggle(false)} end>
                                            <div className="col-7 offset-5 flexBoxFCItems">
                                                <FontAwesomeIcon className="navIcon" size="2x" icon={faBuilding} />
                                                <div className="navText">Companies</div>
                                            </div>
                                        </NavLink >
                                    </li>
                                    <li className="row">
                                        <NavLink to="/labs" activeClassName="activeLink" className="navLink black" onClick={() => setBtnToggle(false)} end>
                                            <div className="col-7 offset-5 flexBoxFCItems">
                                                <FontAwesomeIcon className="navIcon" icon={faWarehouse} />
                                                <div className="navText">Labs</div>
                                            </div>
                                        </NavLink >
                                    </li>
                                    <li className="row">
                                        <NavLink to="/account/new" activeClassName="activeLink" className="navLink black" onClick={() => setBtnToggle(false)} end>
                                            <div className="col-7 offset-5 flexBoxFCItems">
                                                <FontAwesomeIcon className="navIcon" icon={faUserPlus} />
                                                <div className="navText">Add User</div>
                                            </div>
                                        </NavLink >
                                    </li>
                                </>
                            }
                            <li className="row">
                                <div className="navLink black">
                                    <div className="col-7 offset-5 flexBoxFCItems" onClick={Logout}>
                                        <FontAwesomeIcon className="navIcon" icon={faSignOutAlt} />
                                        <div className="navText">Log out</div>
                                    </div>
                                </div>
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