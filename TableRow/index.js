import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import History from '../../Utils/History'

import './styles.css';

export default function LabTableRow({ LabName, MeasurementType, id }) {
    /*<tr className="pointer" onClick={(e) => History.push(linkTo)}>*/

    return (
        <tr className="pointer">
            <td className="col p-3 border-0"><h5 className="m-0">{LabName}</h5></td>
            <td className="col p-3 border-0"><h5 className="m-0">{MeasurementType}</h5></td>
            <div className="col text-end">
                <td className="floatRight border-0 controls red d-inline-block" onClick={() => window.alert('Delete')}>
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                </td>
                <td
                    className="floatRight border-0 controls d-inline-block mx-3"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        History.push('editLink');
                    }}
                >
                    <FontAwesomeIcon icon={faEdit} size="lg" />
                </td>
            </div>
        </tr>
    );
}
