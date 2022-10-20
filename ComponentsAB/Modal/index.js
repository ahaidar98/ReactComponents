import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Modal = ({ modalHeaderTitle, modalBody, modalFooterBtnText, onModalCloseClick, onModalFooterBtnClick, onModalSecondaryFooterBtnClick, modalSecondaryFooterBtnText, secondaryColorBtnClass, colorBtnClass }) => {
    return (
        <div className="renderFadeIn fadeOutAnimation modal showModal" id="Modal" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div className="modal-content secondaryDarkBG boxShadowWrapper">
                    <div className="modal-header">
                        <h3 className="modal-title opacity85" id="ModalLabel">{modalHeaderTitle}</h3>
                        <button type="button" onClick={onModalCloseClick} className="closeBtn redBG white" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body px-3" >{modalBody}</div>
                    <div className="modal-footer">
                        {modalSecondaryFooterBtnText ?
                            <button type="button" className={`renderFadeIn btn ${secondaryColorBtnClass}`} onClick={onModalSecondaryFooterBtnClick}>{modalSecondaryFooterBtnText}</button>
                            : null
                        }
                        <button type="button" className={`renderFadeIn btn ${colorBtnClass}`} onClick={onModalFooterBtnClick}>{modalFooterBtnText}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
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

Modal.defaultProps = {
    onModalSecondaryFooterBtnClick: null,
    modalSecondaryFooterBtnText: '',
    colorBtnClass: 'primaryVariantBG',
    secondaryColorBtnClass: 'primaryVariantBG'
};

export default Modal;