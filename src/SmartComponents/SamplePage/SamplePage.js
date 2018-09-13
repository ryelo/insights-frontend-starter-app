import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import asyncComponent from '../../Utilities/asyncComponent';
import './sample-page.scss';

const SampleComponent = asyncComponent(() => import('../../PresentationalComponents/SampleComponent/SampleComponent'));

/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */

class SamplePage extends Component {

    render() {
        return (
            <SampleComponent> Sample Component </SampleComponent>
        );
    }
}

export default withRouter(SamplePage);
