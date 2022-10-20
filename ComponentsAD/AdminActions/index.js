import { faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function AdminControls({ editLink, onDeleteClick, viewLink }) {
    return (
        <div className="row">
            <div className="col">
                <FontAwesomeIcon icon={faTrash} size="lg" className="productListDelete" onClick={onDeleteClick} />
            </div>
            {editLink &&
                <div className="col">
                    <Link to={editLink} end>
                        <FontAwesomeIcon icon={faPencilAlt} size="lg" className="gray" />
                    </Link>
                </div>
            }
            {viewLink &&
                <div className="col">
                    <Link to={viewLink} end>
                        <FontAwesomeIcon icon={faEye} size="lg" className="gray" />
                    </Link>
                </div>
            }
        </div>    
    );
}