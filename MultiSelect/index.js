import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './styles.css';


/* 
onChange & onClick:

const onHandleMultiSelectOptionClick = (label, value) => {
        let tempArr = [...state.selectedArray],
            orginalOptArr = [...state.optionsArray];

        if (state.labsAssigned.some((opt) => opt.value === value)) {
            tempArr = tempArr.filter((opt) => opt.value !== value);
            orginalOptArr.push({ label, value });
        } else {
            tempArr.push({ label, value });
            orginalOptArr = orginalOptArr.filter((opt) => opt.value !== value);
            if (state.selectedError) {
                setState({ ...state, selectedError: false })
            }
        }

        setState({ ...state, selectedArray: tempArr, optionsArray: orginalOptArr });
    }

    const onHandleMultiSelectSearchChange = (value) => {
        let allOpts = [...state.optionsArrayDupe];

        if (state.optionsArrayDupe.length !== state.optionsArray.length) {
            allOpts = allOpts.filter((opt1) => {
                return !state.selectedArray.find((opt2) => {
                    return opt1.value === opt2.value
                });
            });
        }

        const filteredData = allOpts.filter((opt) => {
            return opt.value.toLowerCase().includes(value.toLowerCase())
        });

        if (value === '') {
            setState({ ...state, optionsArray: state.optionsArrayDupe })
        } else {
            setState({ ...state, optionsArray: filteredData })
        }
    }


*/

export default function MultiSelect({ classNameWrapper, titleClassName, onClick, placeholder, values, arrayOfOptions, onSearchChange, isError }) {
    const [state, setState] = useState({
        searchOptValue: '',
        isOpen: false,
        noResults: false,
    }),
        useOutsideAlerter = (ref) => {
            useEffect(() => {
                /**
                 * Alert if clicked on outside of element
                 */
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
        },
        wrapperRef = useRef(null);

    //useOutsideAlerter(wrapperRef);

    const onHandleOptionClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const label = e.target.label || e.target.name,
            value = e.target.value;
        onClick(label, value)
    }

    const onHandleSearchChange = (e) => {
        setState({ ...state, searchOptValue: e.target.value });

        onSearchChange(e.target.value);
    }

    const renderSelectedPills = () => {
        const errorPlaceHolder = isError && 'red';

        if(values.length > 0) {
            return (
                <div className="row row-cols-auto g-0">
                    {values.map((opt, i) => {
                        return (
                            <button key={i} className="multiSelectOptPill" onClick={onHandleOptionClick} name={opt.label} value={opt.value} type="button">
                                {opt.label}
                                <button className="multiSelectOptPillX" onClick={onHandleOptionClick} name={opt.label} value={opt.value} type="button">&#10005;</button>
                            </button>
                        );
                    })}
                </div>
            );
        }

        return <div className={`multiSelectPlaceHolder ${errorPlaceHolder}`}>{placeholder}</div>;
    }

    const renderMultiSelectOptions = () => {
        if (arrayOfOptions.length > 0) {
            return (
                <div className="row g-0 multiSelectOptionsWrapper">
                    {arrayOfOptions.map((opt, i) => {
                        return (
                            <option className="multiSelectListItem pointer" value={opt.value} label={opt.label} key={i} onClick={onHandleOptionClick}>
                                {opt.label}
                            </option>
                        );
                    })}
                </div>
            );
        }

        return <li className="noResultMultiSelectItem text-center">No Results</li>;
    }

    const multiSelectError = isError && 'multiSelectError';
    const error = isError && 'red';
    return (
        <div ref={wrapperRef} className="row g-0 mb-3">
            <div onClick={() => setState({ ...state, isOpen: !state.isOpen })} className={`multiSelect row g-0 ${classNameWrapper} ${multiSelectError}`}>
                <div className={`col-11 ${titleClassName}`}>
                    {renderSelectedPills()}
                </div>
                <div className="col-1 text-end">
                    <FontAwesomeIcon className={`multiSelectDDIcon ${error}`} icon={state.isOpen ? faAngleUp : faAngleDown} size="md" />
                </div>
            </div>
            {state.isOpen && (
                <div className="row g-0 multiSelectDdOpen">
                    <input type="search" placeholder="Search" className="col-12 mb-3 form-control" onChange={onHandleSearchChange} value={state.searchOptValue} />
                    {renderMultiSelectOptions()}
                </div>
            )}
        </div>
    );
}
