import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Checkbox = ({ label, id, onCheckboxClick, wrapperClass, data }) => {
    return (
        <div className={wrapperClass}>
            <input type="checkbox" className="me-1" id={id} name={id} value={id} onClick={(e) => onCheckboxClick(data, e)}/>
            <label className="checkboxLabel" htmlFor={id}>{label}</label>
        </div>
    );
};

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    wrapperClass: PropTypes.string,
    onCheckboxClick: PropTypes.func,
    data: PropTypes.any
};

Checkbox.defaultProps = {
    onCheckboxClick: null,
    wrapperClass: '',
    data: null
};

export default Checkbox;