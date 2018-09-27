// Import React Library
import React from 'react';

// Routers
import { withRouter, Route, Switch } from 'react-router-dom';

// Other Libraries
import asyncComponent from '../../Utilities/asyncComponent';

const FirstPage = asyncComponent(() => import(/* webpackChunkName: "FirstPage" */ './FirstPage'));
const SecondPage = asyncComponent(() => import(/* webpackChunkName: "SecondPage" */ './SecondPage'));

const SampleRouter = () => {
    return (
        <Switch>
            <Route exact path='/sample' component={ FirstPage } />
            <Route exact path='/sample/:id' component={ SecondPage }/>
        </Switch>
    );
};

export default withRouter(SampleRouter);
