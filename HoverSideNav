import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

export default function SideNav({ navLinksArr, activeNavLink, isSideNavExpanded, width}) {
    const navLinkIconStyle = isSideNavExpanded ? 'col-3' : 'col-12 text-center';
    const navLinkTextStyle = !isSideNavExpanded ? 'd-none' : 'col-9';
    const navLinkStyle = !isSideNavExpanded ? 'px-0' : '';

    return (
        <div id="sideBar" className={`sideBar p-2 ${width}`}>
            {navLinksArr && navLinksArr.map((item, i) => {
                const dashStyles = (i + 1) === navLinksArr.length ? 'dashLink border-0' : 'dashLink'
                const activeStyles = item === activeNavLink ? 'activeLink' : '';

                return (
                    <NavLink className="transparent" to={item} end="activeLink">
                        <div className={`row g-0 ${navLinkStyle} ${dashStyles} ${activeStyles}`}>
                            <div className={navLinkIconStyle}><FontAwesomeIcon icon={faWarehouse} /></div>
                            <div className={navLinkTextStyle}>{item}</div>
                        </div>
                    </NavLink>
                );
            })}
        </div>    
    )
}
