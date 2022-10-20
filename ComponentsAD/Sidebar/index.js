import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


import './styles.css';

export default function Sidebar({ isExpanded, labs, active, width }) {
    const navLinkIconStyle = isExpanded ? 'col-3' : 'col-12 text-center';
    const navLinkTextStyle = !isExpanded ? 'd-xl-none' : 'offset-1 col-8';
    //const navLinkStyle = !isExpanded ? 'px-lg-0' : '';

    return (
        <div id="sideBar" className={`sideBar p-lg-2 p-3 ${width}`}>
            {labs && labs.map((item, i) => {
                const dashStyles = (i + 1) === labs.length ? 'dashLink border-lg-0' : 'dashLink'
                const activeStyles = item.name === active ? 'activeLink' : '';
                const iconShape = item.icon ? item.icon : 'ban';

                return (
                    <NavLink className="transparent" to={item.name} end="activeLink" key={i}>
                        <div className={`row g-0 hoverNavLink ${dashStyles} ${activeStyles}`}>
                            <div className={`${navLinkIconStyle} sidebarIcon`}><FontAwesomeIcon icon={[fas, iconShape]} /></div>
                            <div className={navLinkTextStyle}>{item.code}</div>
                        </div>
                    </NavLink>
                );
            })}
        </div>
    );
}