import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Input = ({
    isError,
    onChange,
    value,
    labelTitle,
    type,
    id,
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
    tabIndex,
    noMarginB
}) => {

    const isInputError = isError ? 'errorInput' : '';
    const isLabelError = isError ? 'red floatingInputInvalid' : '';

    if (postInput || postInputText) {
        return (
            <div className="wrapperDisplay">
                <div className={`${wrapperClassName} form-floating mb-3 comboInputWidth`}>
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
                <div className={`${wrapperClassName} form-floating comboInputWidth`}>

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
            <div className={`${wrapperClassName} form-floating ${noMarginB ? 'mb-0' : 'mb-3'}`}>
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