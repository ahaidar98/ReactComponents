import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Select from '../Select';

const TextArea = ({ isError, id, onChange, value, labelTitle, className, name }) => {
    const isInputError = isError ? 'errorInput' : null;
    const isLabelError = isError ? 'red floatingInputInvalid' : null;
    return (
        <div className="form-floating mb-3">
            <textarea 
                className={`form-control ${isInputError} ${className} input`}
                placeholder={labelTitle}
                id={id}
                name={name}
                onChange={onChange}
                value={value}
                autoComplete="off"
            />
            <label htmlFor={id} className={isLabelError} >{labelTitle}</label>
        </div>
    );
};

TextArea.propTypes = {
    isError: PropTypes.bool,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    labelTitle: PropTypes.string.isRequired,
    className: PropTypes.string,
    name: PropTypes.string,
};

TextArea.defaultProps = {
    type: 'text',
    value: undefined,
    className: '',
    isError: false,
    name: '',
};

export default TextArea;