import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function SearchDropDownOLD ({ arrayOfOptions, id, isError, onChange, labelTitle, className, wrapperClassName, placeholderOption, selecteds, value, name }) {
    const isInputError = isError ? 'errorSelect' : '';
    const isLabelError = isError ? 'red floatingInputInvalid' : '';
    const noLabel = labelTitle === '' ? 'changeSelectHeight' : '';

    return (
        <fieldset className="form-floating mb-3 searchDropdown">
            <input
                className={`form-control ${isInputError} ${className} input`}
                id={`${id} searchDropdownInput`}
                name={name}
                list="datalistInputList"
                placeholder={labelTitle}
                onChange={onChange}
                value={value}
                autoComplete="off"
                role="combobox"
                
            />
            <datalist id="datalistInputList" role="listbox">
                {placeholderOption ? <option value="placeholder" disabled>Select A {labelTitle}</option> : null}
                {
                    arrayOfOptions && arrayOfOptions.map((option, i) => {
                        return <option value={option.value} key={i}>{option.label}</option>;
                    })
                }
            </datalist>
            <label htmlFor={id} className={isLabelError} >{labelTitle}</label>
        </fieldset>
    );
};

SearchDropDownOLD.propTypes = {
    arrayOfOptions: PropTypes.array,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    labelTitle: PropTypes.string,
    className: PropTypes.string.isRequired,
    wrapperClassName: PropTypes.string.isRequired,
    placeholderOption: PropTypes.bool,
    multiple: PropTypes.bool,
    selected: PropTypes.any,
    isError: PropTypes.bool
};

SearchDropDownOLD.defaultProps = {
    multiple: false,
    labelTitle: '',
    selected:'',
    isError: false,
    placeholderOption: false,
    wrapperClassName: '',
    className: '',
    arrayOfOptions: []
};