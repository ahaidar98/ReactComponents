import React from 'react';

import Input from '../Input';
import SearchDropDown from '../SearchDropdown';
import TextArea from '../TextArea';

export default function CreateCalendarEventForm({ state, onChange, onNewProjectClick, onHandleExistingProjectsSearchChange, onSearchDropDownChange }) {
    return (
        <div className="row">
            <div className="col-6">
                <Input
                    isError={state.selectedStartTimeError}
                    name="selectedStartTime"
                    onChange={onChange}
                    value={state.selectedStartTime}
                    labelTitle="Start Date"
                    type="datetime-local"
                />
            </div>
            <div className="col-6">
                <Input
                    isError={state.selectedEndTimeError}
                    name="selectedEndTime"
                    onChange={onChange}
                    value={state.selectedEndTime}
                    labelTitle="End Date"
                    type="datetime-local"
                />
            </div>
            <div className="col-12">
                <SearchDropDown
                    isError={state.existingProjectError}
                    value={state.existingProject}
                    placeholder="Existing Projects"
                    arrayOfOptions={state.allExistingProjectsName}
                    onClick={onSearchDropDownChange}
                    onSearchChange={onHandleExistingProjectsSearchChange}
                    name="existingProject"
                    classNameWrapper="mb-3"
                    showOptionValue
                />
            </div>
            <div className="col-12">
                <TextArea
                    name="projectDescriptionInput"
                    onChange={onChange}
                    value={state.projectDescriptionInput}
                    labelTitle="Task Description for Allocated Time Slot"
                />
            </div>
            <div className="col-12">
                <p className="d-inline-block gray mb-0">Don't have an existing project?
                    <div
                        className="d-inline-block pointer yellow ps-1"
                        onClick={onNewProjectClick}
                    >
                        Create a project.
                    </div>
                </p>
            </div>
        </div>    
    )
}