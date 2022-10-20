import React from "react";
import { Redirect, Route } from "react-router";
import { isTokenValid, isUserNewUser } from '../../Utils/HelperFunctions';
import NotFoundPage from '../../Containers/NotFoundPage'

export default function NewUserPrivateRoute ({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={() => {
                if (isTokenValid() && isUserNewUser()) {
                    return children
                } else if (isTokenValid() && !isUserNewUser()) {
                    return <NotFoundPage />;
                } else {
                    return <Redirect to="/" />;
                }
            }}
        />
    );
}