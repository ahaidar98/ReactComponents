import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

export default function Dropdown({ classNameWrapper, titleClassName, title, list }) {
    const [isOpen, setIsOpen] = useState(false),
    useOutsideAlerter = (ref) => {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsOpen(false)
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    },
    wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef);

    return (
        <div ref={wrapperRef}>
            <div onClick={() => setIsOpen(!isOpen)} className={`${classNameWrapper} dropdown pointer mx-2`}>
                <div className={titleClassName}>
                    {title}
                    <FontAwesomeIcon className="ms-2" icon={isOpen ? faAngleUp : faAngleDown} size="md" />
                </div>
            </div>
            {isOpen && (
                <ul className="dropdownList p-3 text-start">
                    {list.map((item, i) => {
                        return <li key={i} onClick={item.onClick} className="dropdownListItem">{item.title}</li>;
                    })}
                </ul>
            )}
        </div>
    );
}