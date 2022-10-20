import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

export default function SearchDropdown({ classNameWrapper, titleClassName, onClick, placeholder, value, arrayOfOptions, onSearchChange, isError, id, name, showOptionValue }) {
    const [state, setState] = useState({
        searchOptValue: '',
        isOpen: false,
        noResults: false,
        valueLabel: '',
    }),
    wrapperRef = useRef(null);
    
    const useOutsideAlerter = (ref) => {
        useEffect(() => {

            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setState({ ...state, isOpen: false })
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
    
    useOutsideAlerter(wrapperRef);

    const onHandleSearchChange = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setState({ ...state, searchOptValue: e.target.value });
        onSearchChange(e.target.value);
    }

    const renderMultiSelectOptions = () => {
        if (arrayOfOptions.length > 0) {
            return (
                <div className="row g-0 multiSelectOptionsWrapper">
                    {arrayOfOptions.map((opt, i) => {
                        const active = opt.value === value ? 'activeMultiSelectListItem' : '';

                        return (
                            <div className={`${active} multiSelectListItem pointer`} key={i} onClick={() => { setState({ isOpen: false }); onClick(opt.value) }}>
                                {opt.label}
                                {showOptionValue ? <div onClick={() => { setState({ isOpen: false });  onClick(opt.value) }} className="gray">{opt.value}</div> : null}
                            </div>
                        );
                    })}
                </div>
            );
        }

        return <li className="noResultMultiSelectItem text-center">No Results</li>;
    }

    const multiSelectError = isError && 'multiSelectError';
    const error = isError && 'red';
    const labelValue = arrayOfOptions.find((x) => value === x.value)?.label;
    const label = value === '' ? placeholder : (labelValue ? labelValue : placeholder);

    return (
        <div ref={wrapperRef} id={id} name={name} className={`${classNameWrapper} row g-0`}>
            <div onClick={() => setState({ ...state, isOpen: !state.isOpen })} className={`multiSelect row g-0 ${multiSelectError}`}>
                <div className={`col-11 ${titleClassName}`}>{label}</div>
                <div className="col-1 text-end">
                    <FontAwesomeIcon className={`multiSelectDDIcon ${error}`} icon={state.isOpen ? faAngleUp : faAngleDown} size="md" />
                </div>
            </div>
            {state.isOpen && (
                <div className="row g-0 multiSelectDdOpen">
                    <input type="search" placeholder="Search" className="col-12 mb-2 form-control multiSelectInput" onChange={onHandleSearchChange} value={state.searchOptValue} />
                    {renderMultiSelectOptions()}
                </div>
            )}
        </div>
    );
}