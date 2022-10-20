import React, { useRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTimes, faUserPlus, faRectangleList, faBars, faSignOutAlt, faWarehouse, faFolderPlus, faBuilding } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
import atlasLogo from '../../Assets/images/AtlasLogo.png';
import { checkRoles } from '../../Utils/helper'
import useAuth from "../../Hooks/useAuth";

export default function RenderNavbar() {
    const [btnToggle, setBtnToggle] = useState(false),
        navigate = useNavigate(),
        wrapperRef = useRef(null),
        auth = useAuth();

    useEffect(() => {
        /**
            * Alert if clicked on outside of element
            */
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setBtnToggle(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    

    const Logout = () => {
        auth.logout();
    }

    return (
        <nav className="sticky-top navbar py-2 whiteBG Nav" id="navbar" ref={wrapperRef}>
            <div className="container-fluid">
                <div className="navbar-brand black ms-3 flexBoxAllCenter" onClick={() => { setBtnToggle(false); navigate('/'); }}>
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
                            <li className="row">
                                <NavLink to="/hours" activeClassName="activeLink" className="navLink black" onClick={() => setBtnToggle(false)} end>
                                    <div className="col-7 offset-5 flexBoxFCItems">
                                        <FontAwesomeIcon className="navIcon" size="2x" icon={faUpload} />
                                        <div className="navText">Input Hours</div>
                                    </div>
                                </NavLink >
                            </li>
                            {checkRoles(2) ?
                                <>
                                    <li className="row">
                                        <NavLink to="/projects/hours" activeClassName="activeLink" className="navLink black" onClick={() => setBtnToggle(false)} end>
                                            <div className="col-7 offset-5 flexBoxFCItems">
                                                <FontAwesomeIcon className="navIcon" size="2x" icon={faFolderPlus} />
                                                <div className="navText">Add Project Hours</div>
                                            </div>
                                        </NavLink >
                                    </li>
                                    <li className="row">
                                        <NavLink to="/projects" activeClassName="activeLink" className="navLink black" onClick={() => setBtnToggle(false)} end>
                                            <div className="col-7 offset-5 flexBoxFCItems">
                                                <FontAwesomeIcon className="navIcon" size="2x" icon={faRectangleList} />
                                                <div className="navText">Projects</div>
                                            </div>
                                        </NavLink >
                                    </li>
                                </>
                            :
                                null
                                }
                            {checkRoles(3) ?
                                <>
                                    <li className="row">
                                        <NavLink to="/users/new" activeClassName="activeLink" className="navLink black" onClick={() => setBtnToggle(false)} end>
                                            <div className="col-7 offset-5 flexBoxFCItems">
                                                <FontAwesomeIcon className="navIcon" size="2x" icon={faUserPlus} />
                                                <div className="navText">New User</div>
                                            </div>
                                        </NavLink >
                                    </li>
                                    <li className="row">
                                        <NavLink to="/companies" activeClassName="activeLink" className="navLink black" onClick={() => setBtnToggle(false)} end>
                                            <div className="col-7 offset-5 flexBoxFCItems">
                                                <FontAwesomeIcon className="navIcon" icon={faBuilding} />
                                                <div className="navText">Companies</div>
                                            </div>
                                        </NavLink >
                                    </li>
                                    <li className="row">
                                        <NavLink to="/locations" activeClassName="activeLink" className="navLink black" onClick={() => setBtnToggle(false)} end>
                                            <div className="col-7 offset-5 flexBoxFCItems">
                                                <FontAwesomeIcon className="navIcon" icon={faWarehouse} />
                                                <div className="navText">Locations</div>
                                            </div>
                                        </NavLink >
                                    </li>
                                </>
                            :
                                null
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