import React from 'react';
import PropTypes from 'prop-types';

import MultiStepper from '../MultiStepper'
import Input from '../Input';
import TextArea from '../TextArea';
import Select from '../Select';
import SearchDropdown from '../SearchDropdown';


export default function CalendarEventForm({ edit, create, onChange, state, multiStepper, onDeleteClick, labsOptions, managerOptions, companyOptions, onSearchDropDownChange, onCreateCompanyClick, onHandleCompanySearchChange }) {
    const projectTypeSelectOptions = [{ value: 'Industry', label: 'Industry' }, { value: 'Overhead', label: 'Overhead' }, { value: 'Federal', label: 'Federal' }, { value: 'Maintenance', label: 'Maintenance' }, { value: 'Support Work', label: 'Support Work' }],
        projectNumberTypeOptions = [{ value: 'PO', label: 'PO' }, { value: 'Quote Number', label: 'Quote Number' }];
    console.log(state)
    return (
        <div className="row">
            <div className="col-12">
                <Input
                    isError={state.projectNameInputError}
                    name="projectNameInput"
                    onChange={onChange}
                    value={state.projectNameInput}
                    labelTitle="Project Name"
                    type="text"
                    readOnly={!edit && !create}
                />
            </div>
            <div className="col-xs-12 col-md-6">
                <Input
                    isError={state.selectedStartTimeError}
                    name="selectedStartTime"
                    onChange={onChange}
                    value={state.selectedStartTime}
                    labelTitle="Start Date"
                    type="datetime-local"
                    readOnly={!edit && !create}
                />
            </div>
            <div className="col-xs-12 col-md-6">
                <Input
                    isError={state.selectedEndTimeError}
                    name="selectedEndTime"
                    onChange={onChange}
                    value={state.selectedEndTime}
                    labelTitle="End Date"
                    type="datetime-local"
                    readOnly={!edit && !create}
                />
            </div>
            <div className="col-12">
                <Select
                    isError={state.labSelectError}
                    arrayOfOptions={labsOptions}
                    name="labSelect"
                    onChange={onChange}
                    labelTitle="Lab"
                    selected={state.labSelect}
                    disabled={!create}
                    placeholderOption
                />
            </div>
            {/*<TextArea
                isError={this.state.projectDescriptionInputError}
                name="projectDescriptionInput"
                onChange={this.onProjectDetailInputChange}
                value={this.state.projectDescriptionInput}
                labelTitle="Brief Project Description"
            />*/}
            <div className="col-12">
                <Select
                    isError={state.projectTypeSelectError}
                    arrayOfOptions={projectTypeSelectOptions}
                    name="projectTypeSelect"
                    onChange={onChange}
                    labelTitle="Project Type"
                    selected={state.projectTypeSelect}
                    disabled={!edit && !create}
                    placeholderOption
                />
            </div>
            <div className="col-12">
                <Select
                    isError={state.programManagerSelectError}
                    arrayOfOptions={managerOptions}
                    name="programManagerSelect"
                    onChange={onChange}
                    labelTitle="Program Manager"
                    selected={state.programManagerSelect}
                    disabled={!edit && !create}
                    placeholderOption
                />
            </div>
            <div className="col-12">
                {/*restrict unauthorized users*/}
                <SearchDropdown
                    isError={state.companyIdError}
                    value={state.companyId}
                    placeholder="Company Name"
                    arrayOfOptions={companyOptions}
                    onClick={onSearchDropDownChange}
                    onSearchChange={onHandleCompanySearchChange}
                    name="companyId"
                    classNameWrapper="mb-0"
                />
                <p className="ms-2half gray mb-2">Don't see the company you are looking for? Add the company <div onClick={onCreateCompanyClick} className="hoverLinkText yellow d-inline-block pointer">here</div>.</p>
            </div>
            {state.projectTypeSelect === 'Industry' &&
                <div className="col-12">
                    <Input
                        isError={state.projectNumberInputError}
                        name="projectNumberInput"
                        onChange={onChange}
                        value={state.projectNumberInput}
                        labelTitle="Project Number"
                        type="text"
                        onPrependSelectChange={onChange}
                        prependSelectname="projectNumberType"
                        prependSelectOptions={projectNumberTypeOptions}
                        selected={state.projectNumberType}
                        readOnly={!edit && !create}
                        prependSelectDisable={!edit && !create}
                    />
                </div>
            }
            <div className="col-12">
                <TextArea
                    name="projectDescriptionInput"
                    onChange={onChange}
                    value={state.projectDescriptionInput}
                    labelTitle="Task Description for Allocated Time Slot"
                />
            </div>
            <div className="col-12 mb-3">
                {/*<div className="multiStepperHeader">Project Status</div>*/}
                <MultiStepper
                    label1="PO Quoted"
                    onCircle1Click={edit || create ? multiStepper.onCircle1Click : null}
                    onCircle2Click={edit || create ? multiStepper.onCircle2Click : null}
                    onCircle3Click={edit || create ? multiStepper.onCircle3Click : null}
                    label2="PO Recieved"
                    label3="Completed"
                    prevMultiStepNum={state.prevProjectStatus}
                    multiStepNum={state.projectStatus}
                    isDkColor={false}
                />
            </div>
            {edit ?
                <div className="col-12 mb-2 projectDetailFooter">
                    <h6 className="d-inline-block order-2 col-md-9 col-12 dkGray mb-0">Created by <i>{state.projectCreatedBy}</i></h6>
                    <button
                        type="button"
                        className="col-md-3 projectDetailFooterDeleteBtn col-12 renderFadeIn btn redBG white"
                        onClick={onDeleteClick}
                    >
                        Delete
                    </button>
                </div>
                : null
            } 
        </div>   
    );
}

CalendarEventForm.propTypes = {
    create: PropTypes.bool,
    edit: PropTypes.bool,
};

CalendarEventForm.defaultProps = {
    create: false,
    edit: false,
};