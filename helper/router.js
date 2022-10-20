import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import { isNewUser, checkRoles, isTokenValid } from './helper';

import NotFoundPage from '../Containers/NotFoundPage/index';
import HoursPage from '../Containers/HoursPage/index';
import ResetPasswordPage from '../Containers/ResetPasswordPage/index';
import LogInPage from '../Containers/LogInPage/index.jsx';
import FirstTimeUserPage from '../Containers/FirstTimeUserPage';
import CreateAccountPage from '../Containers/CreateAccountPage/index';
import UploadDocumentsPage from '../Containers/UploadDocumentsPage/index';
import CreateManageLocationPage from '../Containers/CreateManageLocationPage';
import LocationsPage from '../Containers/LocationsPage';
import ProjectsPage from '../Containers/ProjectsPage';
import ProjectDetailsPage from '../Containers/ProjectDetailsPage';
import CreateProjectPage from '../Containers/CreateProjectPage';
import CompaniesPage from '../Containers/CompaniesPage';
import PortalPage from '../Containers/PortalPage/index';
import UserListPage from '../Containers/UserListPage/index';
import PreformanceHoursPage from '../Containers/ReportHoursPage/index';
import ProjectsReportsPage from '../Containers/ProjectsReportsPage/index';
import UsersReportsPage from '../Containers/UsersReportsPage/index';

export default function RoutesFunction() {
    const mainSite = (Component, showNavIfLoggedIn) => {
        if (!isNewUser()) {
            if (showNavIfLoggedIn) {
                return (
                    <>
                        <Navbar />
                        <Component />
                    </>
                );
            }

            return <Component />;
        }
        return <Navigate replace to="/login/new" />;
    }

    const PrivateRoute = ({ Component, authRole, addParams, props, noNav }) => {
        if (isTokenValid() && isNewUser()) {
            return <Navigate replace to="/login/new" />;
        } else if (isTokenValid() && checkRoles(authRole) && !isNewUser()) {
            if (addParams) {
                return WithRouter(Component, props, noNav);
            } else {
                if (noNav) {
                    return <Component />;
                }
                return (
                    <>
                        <Navbar isAdmin={checkRoles('Admin')} />
                        <Component />
                    </>
                );
            }
        } else if (isTokenValid() && !checkRoles(authRole)) {
            return <Navigate replace to="/404" />;
        } else if (!isTokenValid()) {
            //logout();
            return <Navigate replace to="/login" />;
        }
    }

    const NewUserOnly = () => {
        if (isTokenValid() && !isNewUser()) {
            return <Navigate replace to="/" />;
        } else if (!isTokenValid()) {
            return <Navigate replace to="/login" />;
        }
        return <FirstTimeUserPage />;
    }

    const WithRouter = (WrappedComponent, props, noNav, ...rest) => {
        const params = useParams();

        return (
            <>
                {noNav ? null : <Navbar isAdmin={checkRoles('Admin')} />}
                <WrappedComponent
                    props={props}
                    params={params}
                    {...rest}
                />
            </>
        );
    };

    const mainPortalOpt = [
        { name: 'Reports', link: '/reports', icon: 'fa-file-lines', restriction: checkRoles(3) },
        !checkRoles(3) && { name: 'Add User Hours', link: '/hours', icon: 'fa-upload', restriction: checkRoles(1) },
        { name: 'Projects', link: '/projects', icon: 'fa-rectangle-list', restriction: checkRoles(2) },
        { name: 'Companies & Locations', link: '/companies&Location', icon: 'fa-building', restriction: checkRoles(3) },
        checkRoles(3) && { name: 'Users', link: '/users/categories', icon: 'fa-users', restriction: checkRoles(3) },
    ],
        userPortalOpt = [
            { name: 'Add User Hours', link: '/hours', icon: 'fa-upload', restriction: checkRoles(1) },
            { name: 'User List', link: '/users', icon: 'fa-users', restriction: checkRoles(3) },
            { name: 'New User', link: '/users/new', icon: 'fa-user-plus', restriction: checkRoles(3) },
        ],
        reportsPortalOpt = [
            { name: 'Users', link: 'users', icon: 'fa-users', restriction: checkRoles(3) },
            { name: 'Projects', link: 'projects', icon: 'fa-rectangle-list', restriction: checkRoles(3) },
        ],
        projectsPortalOpt = [
            { name: 'Add Cell Hours', link: '/projects/hours', icon: 'fa-upload', restriction: checkRoles(2) },
            { name: 'Projects', link: '/projects/all', icon: 'fa-rectangle-list', restriction: checkRoles(2) },
            { name: 'New Project', link: '/projects/new', icon: 'fa-plus', restriction: checkRoles(3) },
        ],
        compNLocPortalOpt = [
            { name: 'Companies', link: '/companies', icon: 'fa-building', restriction: checkRoles(3) },
            { name: 'New Company', link: '/companies/new', icon: 'fa-plus', restriction: checkRoles(3) },
            { name: 'Location', link: '/locations', icon: 'fa-warehouse', restriction: checkRoles(3) },
            { name: 'New Location', link: '/locations/new', icon: 'fa-plus', restriction: checkRoles(3) },
        ];


    return (
        <Router>
            <Routes>
                <Route path="login">
                    {/*<Route path="reset" element={mainSite(ResetPasswordPage, false)} />*/}
                    <Route path="new" element={NewUserOnly()} />
                    <Route index element={mainSite(LogInPage, false)} />
                </Route>
                <Route path="locations">
                    <Route path="new" element={<PrivateRoute authRole={3} Component={CreateManageLocationPage} props={{ edit: false }} addParams />} />
                    <Route path=":locationName/edit" element={<PrivateRoute authRole={3} props={{ edit: true }} Component={CreateManageLocationPage} addParams />} />
                    <Route index element={<PrivateRoute authRole="Program-Manager" authRole={3} Component={LocationsPage} />} />
                </Route>
                <Route path="users">
                    <Route path="new" element={<PrivateRoute authRole={3} Component={CreateAccountPage} />} />
                    <Route path=":userId" element={<PrivateRoute authRole={3} Component={PreformanceHoursPage} props={{ projects: false }} addParams />} />
                    <Route
                        path="categories"
                        element={
                            <PrivateRoute
                                authRole={3}
                                Component={PortalPage}
                                props={{
                                    options: userPortalOpt,
                                    showLogout: false,
                                    cols: 2,
                                    subHeading: 'Select a category below to navigate.',
                                    heading: 'User Categories',
                                    showBackBtn: true
                                }}
                                addParams
                            />
                        }
                    />
                    <Route index element={<PrivateRoute authRole={3} Component={UserListPage} />} />
                </Route>
                <Route path="reports">
                    <Route path="projects" element={<PrivateRoute authRole={3} Component={ProjectsReportsPage} />} />
                    <Route path="users" element={<PrivateRoute authRole={3} Component={UsersReportsPage} />} />
                    <Route
                        index
                        element={
                            <PrivateRoute
                                authRole={3}
                                Component={PortalPage}
                                props={{
                                    options: reportsPortalOpt,
                                    showLogout: false,
                                    cols: 2,
                                    subHeading: 'Select a category below to display reports.',
                                    heading: 'Report Categories',
                                    showBackBtn: true
                                }}
                                addParams
                            />
                        }
                    />
                    <Route index element={<PrivateRoute authRole={3} Component={PortalPage} props={{ options: reportsPortalOpt, showLogout: false, cols: 2 }} addParams />} />
                </Route>
                <Route
                    path="/"
                    element={
                        <PrivateRoute
                            authRole={1}
                            Component={PortalPage}
                            props={{
                                options: mainPortalOpt,
                                showLogout: true,
                                cols: 3,
                                subHeading: 'Select a category below to navigate.',
                            }}
                            addParams
                            noNav
                        />
                    }
                />
                <Route
                    path="companies&Location"
                    element={
                        <PrivateRoute
                            authRole={3}
                            Component={PortalPage}
                            props={{
                                options: compNLocPortalOpt,
                                showLogout: false,
                                cols: 2,
                                subHeading: 'Select an option below to navigate.',
                                showBackBtn: true
                            }}
                            addParams
                        />
                    }
                />
                <Route path="/hours" element={<PrivateRoute authRole={1} props={{ project: false }} Component={HoursPage} addParams />} />
                <Route path="companies">
                    <Route path="new" element={<PrivateRoute authRole={3} Component={CompaniesPage} props={{ new: true }} addParams />} />
                    <Route index element={<PrivateRoute authRole={3} Component={CompaniesPage} props={{ new: false }} addParams />} />
                </Route>
                <Route path="projects">
                    <Route path="hours" element={<PrivateRoute authRole={1} props={{ project: true }} Component={HoursPage} addParams />} />
                    <Route path="report/:projectName/:projectId" element={<PrivateRoute authRole={3} Component={PreformanceHoursPage} props={{ projects: true }} addParams />} />
                    <Route path=":projectId" element={<PrivateRoute authRole={2} Component={ProjectDetailsPage} />} />
                    <Route path="new" element={<PrivateRoute authRole={3} Component={CreateProjectPage} />} />
                    <Route path="all" element={<PrivateRoute authRole={2} Component={ProjectsPage} />} />
                    <Route
                        index
                        element={
                            <PrivateRoute
                                authRole={2}
                                Component={PortalPage}
                                props={{
                                    options: projectsPortalOpt,
                                    showLogout: false,
                                    cols: 2,
                                    subHeading: 'Select a option below to navigate.',
                                    heading: 'Project Categories',
                                    showBackBtn: true
                                }}
                                addParams
                            />
                        }
                    />
                </Route>
                <Route path="*" element={mainSite(NotFoundPage, true)} />
            </Routes>
        </Router>
    );
}
