import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const SearchDropDown = ({ arrayOfOptions, id, isError, onChange, labelTitle, className, wrapperClassName, placeholderOption, selecteds, value }) => {
    const isInputError = isError ? 'errorSelect' : '';
    const isLabelError = isError ? 'red floatingInputInvalid' : '';
    const noLabel = labelTitle === '' ? 'changeSelectHeight' : '';

    return (
        <div className="form-floating mb-3">
            <input
                className={`form-control ltGrayBG ${isInputError} ${className} input`}
                id={id}
                list={`${id}List`}
                placeholder={labelTitle}
                onChange={onChange}
                value={value}
                autoComplete="off"
            />
            <datalist id={`${id}List`}>
                {placeholderOption ? <option value="placeholder" disabled>Select A {labelTitle}</option> : null}
                {
                    arrayOfOptions && arrayOfOptions.map((option, i) => {
                        return <option value={option.value} key={i}>{option.label}</option>;
                    })
                }
            </datalist>
            <label htmlFor={id} className={isLabelError} >{labelTitle}</label>
        </div>
    );
};

SearchDropDown.propTypes = {
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

SearchDropDown.defaultProps = {
    multiple: false,
    labelTitle: '',
    selected:'',
    isError: false,
    placeholderOption: false,
    wrapperClassName: '',
    className: '',
    arrayOfOptions: []
};

export default SearchDropDown;