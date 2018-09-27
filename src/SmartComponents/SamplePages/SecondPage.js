// Import React Library
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Routers
import { withRouter, Link } from 'react-router-dom';

// Other Libraries
import asyncComponent from '../../Utilities/asyncComponent';

// Styles
import './styles.scss';

// Import using the async utility.
// This will allow the component to wait until the data is loaded before rendering and will throw a loader
const Content = asyncComponent(() => import('../../PresentationalComponents/Content/Content'));

/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 */

class SecondPage extends Component {

    render() {
        return (
            <React.Fragment>
                <Content type='title'> { this.props.match.params.id } </Content>
                <Link to= { `/sample`}>
                    <Content> Back to home </Content>
                </Link>
            </React.Fragment>
        );
    }
}

SecondPage.propTypes = {
    match: PropTypes.any
};

export default withRouter(SecondPage);
