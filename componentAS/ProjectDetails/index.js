import React from 'react';
import PropTypes from 'prop-types';
//import './styles.css';

import Input from '../../component/Input';
import TextArea from '../../component/TextArea';
import MultiStepper from '../../component/MultiStepper';
import Select from '../../component/Select';

import { formatDate } from '../../Helpers';



const ProjectDetails = ({ onLabBtnClick, labName, eventsArray, onEventsClick, pNameObj, pDescriptObj, pNumObj, pTypeObj, pPartnerObj, pManagaerObj, multiStepObj }) => {
    return (
        <div className="my-5">
            <div className="mb-3">
                {onLabBtnClick ?
                    <button
                        className="button selectedLabBtn d-inline-block m-2 ms-0"
                        onClick={onLabBtnClick}
                    >
                        {labName}
                    </button>
                    :
                    null
                }
                {eventsArray.map((event, i) => {
                    return (
                        <button
                            className="button blackBG selectedLabBtn d-inline-block m-2 ms-0"
                            onClick={onEventsClick}
                            key={i}
                        >
                            {formatDate(new Date(event.start))} - {formatDate(new Date(event.end))}
                        </button>
                    );
                })}
            </div>
            <div>
                <Input
                    isError={pNameObj.isError}
                    id="projectNameInput"
                    onChange={pNameObj.onChange}
                    value={pNameObj.value}
                    labelTitle="Project Name"
                    type="text"
                />
                {/*<TextArea
                    isError={this.state.projectDescriptionInputError}
                    id="projectDescriptionInput"
                    onChange={this.onProjectDetailInputChange}
                    value={this.state.projectDescriptionInput}
                    labelTitle="Brief Project Description"
                />*/}
                <Input
                    isError={pNumObj.isError}
                    id="projectNumberInput"
                    onChange={pNumObj.onChange}
                    value={pNumObj.value}
                    labelTitle="Project Number"
                    type="text"
                    onPrependSelectChange={pNumObj.onPrependSelectChange}
                    prependSelectId="projectNumberType"
                    prependSelectOptions={pNumObj.prependSelectOptions}
                    selected={pNumObj.selected}
                />
                <Select
                    isError={pTypeObj.isError}
                    arrayOfOptions={pTypeObj.arrayOfOptions}
                    id="projectTypeSelect"
                    onChange={pTypeObj.onChange}
                    labelTitle="Project Type"
                    className="ltGrayBG"
                    selected={pTypeObj.selected}
                    placeholderOption
                />
                <Input
                    isError={pPartnerObj.isError}
                    id="partnerInput"
                    onChange={pPartnerObj.onChange}
                    value={pPartnerObj.value}
                    labelTitle="Industry Partner"
                    type="text"
                />
                <Select
                    isError={pManagaerObj.isError}
                    arrayOfOptions={pManagaerObj.arrayOfOptions}
                    id="programManagerSelect"
                    onChange={pManagaerObj.onChange}
                    labelTitle="Program Manager"
                    className="ltGrayBG"
                    selected={pManagaerObj.selected}
                    placeholderOption
                />
                <div className="my-4">
                    <h4 className="text-center">Project Status</h4>
                    <MultiStepper
                        label1="PO Quoted"
                        onCircle1Click={multiStepObj.onCircle1Click}
                        onCircle2Click={multiStepObj.onCircle2Click}
                        onCircle3Click={multiStepObj.onCircle3Click}
                        label2="PO Recieved"
                        label3="Completed"
                        prevMultiStepNum={multiStepObj.prevMultiStepNum}
                        multiStepNum={multiStepObj.multiStepNum}
                        isDkColor={multiStepObj.isDkColor}
                    />
                </div>
            </div>
        </div>
    );
}

ProjectDetails.propTypes = {
    
};

ProjectDetails.defaultProps = {

};

export default ProjectDetails;