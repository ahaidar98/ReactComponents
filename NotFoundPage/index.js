import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import StatusBar from '../../Components/StatusBar/index';
import './styles.css';

export default function NotFoundPage () {
    return (
        <div id="lostPage" className="content px-5">
            <StatusBar />
            <div className="row boxContainerLogoWrapper">
                <div className="col-12">
                    <FontAwesomeIcon icon={faQuestion} className="fa-spin yellow mb-2" size="5x" />
                </div>
            </div>
            <div className="boxCotainerWrapper whiteBG mx-5">
                <div className="header404Txt"><b>404</b></div>
                <h2>UH OH! You`re Lost!</h2>
                <div className="pt-3 pb-5">
                    <h5 className="px-5 black">The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the Dashboard.</h5>
                </div>
                <Link className="button col-12" to="/"><b>Dashboard</b></Link>
            </div>
        </div>
    );
}
