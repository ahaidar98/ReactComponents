import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const MultiStepper = ({ prevMultiStepNum, multiStepNum, label1, label2, label3, onCircle1Click, onCircle2Click, onCircle3Click, isDkColor }) => {
    const active2ndStep = multiStepNum >= 2 ? 'slideColorIn' : '';
    const active3rdStep = multiStepNum >= 3 ? 'slideColorIn' : '';
    const activeColor = isDkColor ? 'grayActiveColor' : 'ltGrayActiveColor';
    const activeColorBorder = multiStepNum >= 2 ? 'yellowBorderLeftColor' : isDkColor ? 'grayBorderLeftColor' : 'ltGrayBorderLeftColor';
    // A single step color animation conditions
    let circle2StepDelay = multiStepNum > prevMultiStepNum ? 'colorSlideDelay' : '';
    // Jumping steps color animation conditions
    let circle3StepDelay = null,
        diagnolStepDelay = null

    if ((prevMultiStepNum === 1) && (multiStepNum === 3)) {
        circle3StepDelay = 'colorSlideTripleDelay';
        diagnolStepDelay = 'colorSlideDoubleDelay';
    } else if ((prevMultiStepNum === 3) && (multiStepNum === 1)) {
        diagnolStepDelay = 'colorSlideDoubleDelay'
        circle3StepDelay = 'colorSlideDelay';
        circle2StepDelay = 'colorSlideTripleDelay';
    } else {
        if (multiStepNum > prevMultiStepNum) {
            circle3StepDelay = 'colorSlideDelay';
            diagnolStepDelay = 'colorSlideDoubleDelay';
        } else {
            circle3StepDelay = 'colorSlideDelay'
        }
    }

    /*
        <div className="boxShadow rectangleShapeStepperSM yellowBG" />
        <div className={`centerFlex ${onCircle1Click ? 'pointer' : ''}`} onClick={onCircle1Click}>
            <div className="circleShapeStepper boxShadow yellowBG">
                <h5 className="m-0">{label1}</h5>
            </div>
        </div>

        <div className={`boxShadow rectangleShapeStepper colorAnimation ${activeColor} ${rectangle2StepDelay} ${active2ndStep}`} />
        <div className={`centerFlex ${onCircle1Click ? 'pointer' : ''}`} onClick={onCircle2Click}>
            <div className={`circleShapeStepper boxShadow colorAnimation ${activeColor} ${circle2StepDelay} ${active2ndStep}`}>
                <h5 className="m-0">{label2}</h5>
            </div>
        </div>

        <div className={`boxShadow rectangleShapeStepper colorAnimation ${activeColor} ${rectangle3StepDelay} ${active3rdStep}`} />
        <div className={`centerFlex ${onCircle1Click ? 'pointer' : ''}`} onClick={onCircle3Click}>
            <div className={`circleShapeStepper boxShadow colorAnimation ${activeColor} ${circle3StepDelay} ${active3rdStep}`}>
                <h5 className="m-0">{label3}</h5>
            </div>
        </div>

        <div className={`boxShadow rectangleShapeStepperSM colorAnimation ${activeColor} ${rectangleSMStepDelay} ${active3rdStep}`} />
     */

    return (
        <div id="multiStepper" className="row g-0 text-center multiStepWrapper">
            <div className={`col yellowBG multiStep position-relative multiStep ${onCircle1Click ? 'pointer' : ''}`} onClick={onCircle1Click}>
                <h5 className="m-0 d-inline-block">{label1}</h5>
                <div className="diagonal yellowBorderLeftColor"></div>
            </div>
            <div className={`col multiStep colorAnimation position-relative multiStep ${onCircle1Click ? 'pointer' : ''} ${activeColor} ${circle2StepDelay} ${active2ndStep}`} onClick={onCircle2Click}>
                <h5 className="m-0 d-inline-block">{label2}</h5>
                <div className={`diagonal ${activeColorBorder} ${diagnolStepDelay}`}></div>
            </div>
            <div className={`col multiStep colorAnimation multiStep ${onCircle1Click ? 'pointer' : ''} ${activeColor} ${circle3StepDelay} ${active3rdStep}`} onClick={onCircle3Click}>
                <h5 className="m-0 d-inline-block">{label3}</h5>
            </div>
        </div>
    );
}

MultiStepper.propTypes = {

};

MultiStepper.defaultProps = {

};

export default MultiStepper;