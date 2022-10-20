import React from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../Navbar';

export default function WithRouter(WrappedComponent, props, ...rest) {
    const params = useParams();

    return (
        <>
            <Navbar />
            <WrappedComponent
                props={props}
                params={params}
                {...rest}
            />
        </>
    );
};