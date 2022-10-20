import React, { useState, useEffect } from "react";
import { CustomPicker } from "react-color";
import { Hue, Saturation } from "react-color/lib/components/common";

import Input from '../Input';

import './styles.css';


export const MyPicker = ({ color, hex, hsl, hsv, onInputChange, onChange, colorError, name, placeholder }) => {
    const [state, setState] = useState({
            showColorPicker: false,
            showGuide: true,
            timer: 0,
            maxTimer: 3
        }),
        isInputError = colorError ? 'errorInput' : null,
        showColorPickerToolTip = state.showColorPicker ? 'showColorPicker' : '',
        showGuideToolTip = state.showGuide ? 'showGuideToolTip' : '',
        colorPicker = () => {
            if (!state.showGuide && state.showColorPicker) {
                return (
                    <div className="row g-0 my-3">
                        <div className="hue">
                            <Hue hsl={hsl} onChange={onChange} />
                        </div>
                        <div className="saturation">
                            <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
                        </div>
                    </div>
                );
            }
        },
        guide = () => {
            if (state.showGuide && !state.showColorPicker) {
                return (
                    <span className="tooltiptext tooltip-bottom">
                        Click here to change colors.
                    </span>
                );
            }
        },
        onSwatchHandleClick = (e) => {
            console.log('click', e)
            e.preventDefault();
            e.stopPropagation();

            setState({
                ...state,
                showColorPicker: !state.showColorPicker,
                showGuide: false
            });
        };

    useEffect(() => {
        let interval = null;

        if (state.timer > state.maxTimer || !state.showGuide) {
            clearInterval(interval);
            setState({ ...state, maxTimer: 0, showGuide: false });
        } else if (state.showGuide) {
            interval = setInterval(() => {
                setState((prevState) => ({ ...state, timer: prevState.timer + 1 }));
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [state.showGuide, state.timer])

    return (
        <div>
            <Input
                wrapperClassName="colorPickerInput"
                name={name}
                isError={colorError}
                onChange={onInputChange}
                value={color}
                labelTitle={placeholder}
                type="text"
                postInput={() =>
                    <div
                        onClick={onSwatchHandleClick}
                        className={`${isInputError} ${showColorPickerToolTip} ${showGuideToolTip} endInputText swatch`}
                        style={{ background: hex }}
                    >
                        {guide()}
                    </div>
                }
            /> 
            {colorPicker()}
        </div>
    );
};

export default CustomPicker(MyPicker);
