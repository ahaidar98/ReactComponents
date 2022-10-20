import React from 'react';
import PropTypes from 'prop-types';
import ATLASLoading from '../../Assets/images/ATLASLoading.gif';
import './styles.css';

export default function LoadingSpinnerModal ({ show, className }) {
    if (show) {
        return (
            <div className="renderFadeIn fadeOutAnimation modal" id="spinningModal" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className={`modal-content bg-transparent border-0 boxShadowWrapper ${className}`}>
                        <div className="modal-body">
                            <img width={300} src={ATLASLoading} alt="Loading gif of ATLAS logo" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

LoadingSpinnerModal.propTypes = {
    show: PropTypes.bool.isRequired,
};

LoadingSpinnerModal.defaultProps = {
  
};