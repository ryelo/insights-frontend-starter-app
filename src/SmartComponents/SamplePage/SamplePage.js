import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import asyncComponent from '../../Utilities/asyncComponent';
import './styles.scss';

const Content = asyncComponent(() => import('../../PresentationalComponents/Content/Content'));

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
            <React.Fragment>
                <Content type='title'> Sample Title </Content>
                <Content> Sample Component </Content>
            </React.Fragment>
        );
    }
}

export default withRouter(SamplePage);
