import React from "react";
import {  Redirect, Route } from "react-router";
import { isTokenValid, checkRoles, isUserNewUser } from '../../Utils/HelperFunctions';

export default function PrivateRoute({ children, authRole, ...rest }) {
    return (
        <Route
            {...rest}
            render={() => {
                if (isTokenValid() && checkRoles(authRole) && !isUserNewUser()) {
                    return children
                } else if (isTokenValid() && isUserNewUser()) {
                    return <Redirect to="/new-login" />;
                } else {
                    return <Redirect to="/" />;
                }
            }}
        />
    )
}

/*
 else if (isTokenValid() && !isUserNewUser()) {
    return <Redirect to="/" />;
} else {
    return <Redirect to="/login" />;
}
 */