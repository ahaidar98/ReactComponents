import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Select = ({ name, arrayOfOptions, id, isError, onChange, labelTitle, className, wrapperClassName, placeholderOption, selected, multiple, disabled }) => {
    const isInputError = isError ? 'errorSelect' : '';
    const isLabelError = isError ? 'red op1 sfloatingInputInvalid' : '';
    const noLabel = labelTitle === '' ? 'changeSelectHeight' : '';
    const value = selected.length > 0 && selected !== null && selected && selected !== '' ? selected : 'placeholder'

    return (
        <div className={`${wrapperClassName} form-floating mb-3 `}>
            <select
                className={`${isInputError} ${noLabel} ${className} select form-select`}
                multiple={multiple}
                defaultValue={selected ? selected : 'placeholder'}
                id={id}
                name={name}
                placeholder={labelTitle}
                onChange={onChange}
                aria-label={`${multiple ? 'multiple' : ''} select`}
                disabled={disabled}
                value={value}
            >
                {placeholderOption && <option value="placeholder" disabled>Select A {labelTitle}</option>}
                {
                    arrayOfOptions && arrayOfOptions.map((option, i) => {

                        return <option value={option.value} key={i}>{option.label}</option>;
                    })
                }
            </select>
            <label className={isLabelError} htmlFor={id}>{labelTitle}</label>
        </div>
    );
};

Select.propTypes = {
    arrayOfOptions: PropTypes.array,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    labelTitle: PropTypes.string,
    className: PropTypes.string.isRequired,
    wrapperClassName: PropTypes.string.isRequired,
    placeholderOption: PropTypes.bool,
    multiple: PropTypes.bool,
    selected: PropTypes.any,
    isError: PropTypes.bool,
};

Select.defaultProps = {
    disabled: false,
    multiple: false,
    labelTitle: '',
    selected: '',
    id: '',
    isError: false,
    placeholderOption: false,
    wrapperClassName: '',
    className: '',
    arrayOfOptions: []
};

export default Select;