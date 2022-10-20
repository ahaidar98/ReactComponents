import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Input = ({
    isError,
    id,
    onChange,
    value,
    labelTitle,
    type,
    wrapperClassName,
    className,
    name,
    readOnly,
    isAutoComplete,
    postInputText,
    postInput,
    preInputText,
    preInput,
    onKeyDown,
    onKeyUp,
    tabIndex
}) => {

    const isInputError = isError ? 'errorInput' : '';
    const isLabelError = isError ? 'red floatingInputInvalid' : '';

    if (postInput || postInputText) {
        return (
            <div className="wrapperDisplay">
                <div className={`form-floating mb-3 comboInputWidth ${wrapperClassName}`}>
                    <input
                        type={type}
                        className={`form-control input ${isInputError} ${className}`}
                        name={name}
                        placeholder={labelTitle}
                        onChange={onChange}
                        value={value}
                        readOnly={readOnly}
                        autoComplete={isAutoComplete ? "true" : "new-password"}
                        onKeyDown={onKeyDown}
                        onKeyUp={onKeyUp}
                        tabIndex={tabIndex}
                    />
                    <label htmlFor={id} className={isLabelError} >{labelTitle}</label>
                </div>
                {postInput && postInput()}
                {postInputText &&
                    <div className={`endInputText ${isInputError}`}>
                        {postInputText}
                    </div>
                }
            </div>
        );
    } else if (preInput || preInputText) {
        return (
            <div className="wrapperDisplay">
                {preInput && preInput()}
                {preInputText &&
                    <div className={`preInputText ${isInputError}`}>
                        {preInputText}
                    </div>
                }
                <div className={`form-floating comboInputWidth ${wrapperClassName}`}>
                    <input
                        type={type}
                        className={`form-control input ${isInputError} ${className}`}
                        name={name}
                        placeholder={labelTitle}
                        onChange={onChange}
                        value={value}
                        readOnly={readOnly}
                        autoComplete={isAutoComplete ? "true" : "new-password"}
                        onKeyDown={onKeyDown}
                        onKeyUp={onKeyUp}
                        tabIndex={tabIndex}
                    />
                    <label htmlFor={id} className={isLabelError} >{labelTitle}</label>
                </div>
            </div>
        );
    } 

    return (
        <div>
            <div className={`form-floating mb-3 ${wrapperClassName}`}> 
                <input
                    type={type}
                    className={`form-control input ${isInputError} ${className}`}
                    name={name}
                    placeholder={labelTitle}
                    onChange={onChange}
                    value={value}
                    readOnly={readOnly}
                    autoComplete={isAutoComplete ? "true" : "new-password"}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                    tabIndex={tabIndex}
                />
                <label htmlFor={id} className={`${isLabelError} text-start`} >{labelTitle}</label>
            </div>
        </div>
    );
};

Input.propTypes = {
    isError: PropTypes.bool,
    id: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    labelTitle: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    readOnly: PropTypes.bool,
    isAutoComplete: PropTypes.bool,
};

Input.defaultProps = {
    isError: false,
    value: undefined,
    type: 'text',
    className: '',
    readOnly: false,
    isAutoComplete: false,
};

export default Input;