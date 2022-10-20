import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function AdminControls({ editLink, onDeleteClick }) {
    return (
        <div className="row">
            <div className="col">
                <Link to={editLink} end>
                    <FontAwesomeIcon icon={faPencilAlt} size="lg" />
                </Link>
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faTrash} size="lg" className="productListDelete" onClick={onDeleteClick} />
            </div>
        </div>    
    );
}