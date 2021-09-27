import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Select from '../Select';

const Input = ({ isError, id, onChange, value, labelTitle, type, className, prependSelectOptions, onPrependSelectChange, prependSelectId, name, selected, readOnly, prependSelectDisable }) => {
    const isInputError = isError ? 'errorInput' : null;
    const isLabelError = isError ? 'red floatingInputInvalid' : null;
    const prependFlex = prependSelectOptions ? 'wrapperDisplay' : '';
    const prependInputWidth = prependSelectOptions ? 'prependInputWidth col-md-12' : '';
    const borderRadius = prependSelectOptions ? 'prependInputBorderRadius' : '';

    return (
        <div className={prependFlex}>
            {prependSelectOptions ?
                /*<div className={`prependWrapper ${isInputError}`}>
                    <select id={prependSelectId} className={`prependSelect ltGrayBG ${isInputError}`} onChange={onPrependSelectChange}>
                        {prependSelectOptions.map((opt) => {
                            return <option value={opt}>{opt.charAt(0).toUpperCase() + opt.slice(1)}</option>;
                        })}
                    </select>
                </div>*/
                <Select
                    arrayOfOptions={prependSelectOptions}
                    id={prependSelectId}
                    isError={isInputError}
                    onChange={onPrependSelectChange}
                    className={`ltGrayBG ${isInputError} prependSelect`}
                    wrapperClassName={`prependWrapper col-md-12 ${isInputError}`}
                    selected={selected}
                    disabled={prependSelectDisable}
                />
            : null
            }
            <div className={`form-floating mb-3 ${prependInputWidth}`}> 
                <input
                    type={type}
                    className={`form-control ltGrayBG ${isInputError} ${className} ${borderRadius} input`}
                    id={id}
                    name={name}
                    placeholder={labelTitle}
                    onChange={onChange}
                    value={value}
                    autoComplete="off"
                    readOnly={readOnly}
                />
                <label htmlFor={id} className={isLabelError} >{labelTitle}</label>
            </div>
        </div>
    );
};

Input.propTypes = {
    isError: PropTypes.bool,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    labelTitle: PropTypes.string.isRequired,
    type: PropTypes.string,
    prependSelectOptions: PropTypes.array,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    onPrependSelectChange: PropTypes.func,
    prependSelectId: PropTypes.string
};

Input.defaultProps = {
    prependSelectDisable: false,
    readOnly: false,
    type: 'text',
    value: undefined,
    className: '',
    prependSelectOptions: null,
    isError: false,
    name: '',
    onPrependSelectChange: () => {},
    prependSelectId: ''
};

export default Input;