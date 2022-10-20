import React from 'react';
import PropTypes from 'prop-types';
//import './styles.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import Checkbox from '../../component/Checkbox';

import { formatDate, reoccur, isAnOverlapEvent } from '../../Helpers';

const SelectScheduleTimes = ({ eventsArray, onRemoveEventClick, onFinishedBtnClick, onClearBtnClick, reoccurTimeSlot, calendarEvents, calendarSelect, btnText }) => {
    const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

    return (
        <div>
            <div>
                {eventsArray.map((event, i) => {
                    const startDate = new Date(event.start);
                    const endDate = new Date(event.end);
                    const sameDayEvent = startDate.toLocaleDateString() === endDate.toLocaleDateString();
                    if (sameDayEvent) {
                        return (
                            <div className="dropdown d-inline-block m-1 renderFadeIn" key={i}>
                                <button className="button blackBG dropdown-toggle" type="button" id="eventtimeDD" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className="d-inline-block">{formatDate(startDate)} - {formatDate(endDate)}</div>
                                    <div className="d-inline-block floatRight px-3 red" onClick={(e) => onRemoveEventClick(e, startDate, endDate)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </div>
                                </button>
                                <ul className="dropdown-menu blackBG ps-3 pe-1" aria-labelledby="eventtimeDD">
                                    <div>Recur on a day of this week:</div>
                                    {daysOfWeek.map((day, i) => {
                                        let getDates = reoccur([startDate, endDate], day, event.allDay);
                                        const showCheckBox = !isAnOverlapEvent(getDates.start, getDates.end, calendarEvents) ? 'keepCheckbox' : 'removeCheckbox';
                                        return (
                                            <Checkbox
                                                key={i}
                                                label={day}
                                                id={day}
                                                wrapperClass={`d-inline-block m-1`}
                                                data={{ dates: [startDate, endDate], isAllDay: event.allDay }}
                                                onCheckboxClick={reoccurTimeSlot}
                                            />
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    }
                    return (
                        <div className="button blackBG">
                            <div className="d-inline-block">{formatDate(startDate)} - {formatDate(endDate)}</div>
                            <div className="pointer d-inline-block floatRight px-3 red" onClick={(e) => onRemoveEventClick(e, startDate, endDate)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </div>
                        </div>
                    );
                })}
            </div>
            {eventsArray.length > 0 ?
                <div className="d-flex justify-content-end renderFadeIn">
                    <button
                        className="button selectedLabBtn white redBG d-inline-block m-2 me-0"
                        onClick={onClearBtnClick}
                    >
                        Clear Times
                    </button>
                    <button
                        className="button selectedLabBtn d-inline-block m-2 me-0"
                        onClick={onFinishedBtnClick}
                    >
                        {btnText} &#x2192;
                    </button>
                </div>
                :
                null
            }
            <div className="my-3">
                <FullCalendar
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    events={calendarEvents}
                    select={calendarSelect}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    selectable
                />
            </div>
        </div>
    );
}

SelectScheduleTimes.propTypes = {

};

SelectScheduleTimes.defaultProps = {

};

export default SelectScheduleTimes;