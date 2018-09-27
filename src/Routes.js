import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import asyncComponent from './Utilities/asyncComponent';
import some from 'lodash/some';

const SampleRouter = asyncComponent(() => import(/* webpackChunkName: "SamplePage" */ './SmartComponents/SamplePages/SampleRouter'));
const paths = {
    sample: '/sample'
};

type Props = {
    childProps: any
};

const SweetRoute = ({ component: Component, rootClass, ...rest }) => {
    const root = document.getElementById('root');
    root.removeAttribute('class');
    root.classList.add(`page__${rootClass}`);
    root.setAttribute('role', 'main');

    return (<Component {...rest} />);
};

SweetRoute.propTypes = {
    component: PropTypes.func,
    rootClass: PropTypes.string
};

/**
 * the Switch component changes routes depending on the path.
 *
 * Route properties:
 *      exact - path must match exactly,
 *      path - https://prod.foo.redhat.com:1337/insights/advisor/rules
 *      component - component to be rendered when a route has been chosen.
 */
export const Routes = (props: Props) => {
    const path = props.childProps.location.pathname;

    return (
        <Switch>
            <SweetRoute path={paths.sample} component={SampleRouter} rootClass='sample' />
            {/* Finally, catch all unmatched routes */}
            <Route render={() => some(paths, p => p === path) ? null : (<Redirect to={paths.sample} />)} />
        </Switch>
    );
};
