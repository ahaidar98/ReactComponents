import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

const LoadingSpinnerModal = ({ show, className }) => {
    if (show) {
        return (
            <div className="renderFadeIn fadeOutAnimation modal" id="spinningModal" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className={`modal-content bg-transparent border-0 boxShadowWrapper ${className}`}>
                        <div className="modal-body">
                            <FontAwesomeIcon icon={faSpinner} className="fa-spin" size="8x" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

LoadingSpinnerModal.propTypes = {
    modalHeaderTitle: PropTypes.string.isRequired,
    modalBody: PropTypes.any.isRequired,
    modalFooterBtnText: PropTypes.string.isRequired,
    modalSecondaryFooterBtnText: PropTypes.string,
    onModalCloseClick: PropTypes.func.isRequired,
    onModalFooterBtnClick: PropTypes.func.isRequired,
    onModalSecondaryFooterBtnClick: PropTypes.func,
    colorBtnClass: PropTypes.string,
    secondaryColorBtnClass: PropTypes.string,
};

LoadingSpinnerModal.defaultProps = {
    onModalSecondaryFooterBtnClick: null,
    modalSecondaryFooterBtnText: '',
    colorBtnClass: 'primaryVariantBG',
    secondaryColorBtnClass: 'primaryVariantBG'
};

export default LoadingSpinnerModal;
#spinningModal {
    display: inline-block;
    background: rgba(0,0,0,.1) !important;
}

#spinningModal .modal-body {
    overflow-y: hidden;
}

.closeBtn {
    display: inline-block;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: none;
    padding: 0 10px 3px 10px;
    font-size: 1.5rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.modal-body {
    max-height: calc(100vh - 210px);
    overflow-y: auto;
}

#spinningModal .modal-dialog {
    max-width: 200px !important;
}

@media screen and (max-width:576px) {
    #spinningModal .modal-dialog {
        max-width: 550px !important;
    }
}
