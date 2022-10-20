import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

const LoadingSpinnerModal = ({ }) => {
    return (
        <div className="renderFadeIn fadeOutAnimation modal" id="spinningModal" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content bg-transparent border-0 boxShadowWrapper">
                    <div className="modal-body">
                        <FontAwesomeIcon icon={faSpinner} className="fa-spin" size="8x" />
                    </div>
                </div>
            </div>
        </div>      
    );
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