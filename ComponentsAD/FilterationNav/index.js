import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

export default function FilterationNav({ filterMethod, monthSelected, quarterSelected, yearSelect, onFilterInputChange, onFilterButtonClick, extraNavComponent }) {
    const months =[{ value: 1, label: 'January' }, { value: 2, label: 'February' }, { value: 3, label: 'March' }, { value: 4, label: 'April' }, { value: 5, label: 'May' }, { value: 6, label: 'June' }, { value: 7, label: 'July' }, { value: 8, label: 'August' }, { value: 9, label: 'September' }, { value: 10, label: 'October' }, { value: 11, label: 'November' }, { value: 12, label: 'December' }],
        quarters = [{ value: 1, label: 'First Quarter' }, { value: 2, label: 'Second Quarter' }, { value: 3, label: 'Third Quarter' }, { value: 4, label: 'Fourth Quarter' }],
        currentYear = new Date().getFullYear();

    const yearOptions = () => {
        let yearOptions = [];
        const year = 2021;

        for (let i = 0; i <= (currentYear - year); i++) {
            yearOptions[i] = year + i;
        }

        return yearOptions;
    }

    const isButtonActive = (name) => {
        if (filterMethod === name) {
            return 'nav-link activeLink';
        }

        return 'nav-link';
    }
    console.log(extraNavComponent)
    return (
        <div className="row gx-3 gy-0">
            <nav id="dashFilterNav" className="nav navbar  nav-pills nav-justified mb-lg-3 mb-4">
                {extraNavComponent ? extraNavComponent() : null}
                {filterMethod === 'ByMonth' ?
                    <select name="filterMonthSelect" onChange={onFilterInputChange} className="filterSelect col ms-2 mb-1 mb-lg-0">
                        {months.map((option, i) => {
                            return <option selected={option.value === parseInt(monthSelected)} value={option.value} key={i}>{option.label}</option>;
                        })}
                    </select>
                    :
                    null
                }
                {filterMethod === 'ByQuarter' ?
                    <select name="filterQuarterSelect" onChange={onFilterInputChange} className="filterSelect col ms-2 mb-1 mb-lg-0">
                        {quarters.map((option, i) => {
                            return <option selected={option.value === parseInt(quarterSelected)} value={option.value} key={i}>{option.label}</option>;
                        })}
                    </select>
                    :
                    null
                }
                <select name="filterYearSelect" onChange={onFilterInputChange} className="filterSelect mb-1 mb-lg-0 col ms-2">
                    {yearOptions().map((yearOpt, i) => {
                        return <option selected={yearOpt === parseInt(yearSelect)} value={yearOpt} key={i}>{yearOpt}</option>;
                    })}
                </select>
                <button name="filterMethod" value="ByMonth" className={`col ms-2 mb-1 mb-lg-0 ${isButtonActive('ByMonth')}`} onClick={onFilterButtonClick}>Monthly</button>
                <button name="filterMethod" value="ByQuarter" className={`col ms-2  mb-1 mb-lg-0 ${isButtonActive('ByQuarter')}`} onClick={onFilterButtonClick}>Quarterly</button>
                <button name="filterMethod" value="ByYear" className={`col ms-2 mb-1 mb-lg-0 ${isButtonActive('ByYear')}`} onClick={onFilterButtonClick}>Yearly</button>
                <button name="filterMethod" value="printDashboard" className="col ms-2 nav-link printBtn mb-1 mb-lg-0" onClick={() => window.print()}>
                    Print <FontAwesomeIcon className="ms-2" icon={faPrint} />
                </button>
            </nav>
        </div>
    )
}