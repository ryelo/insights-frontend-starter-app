// Import React Library
import React, { Component } from 'react';

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

class FirstPage extends Component {

    render() {
        return (
            // Wrap in a React.Fragment because there needs to be some kind of wrapper - won't add anything to DOM
            <React.Fragment>
                <Content type='title'> Sample Title </Content>
                <Link to= { `/sample/1`}>
                    <Content> Link 1 </Content>
                </Link>
                <Link to= { `/sample/2`}>
                    <Content> Link 2 </Content>
                </Link>
            </React.Fragment>
        );
    }
}

export default withRouter(FirstPage);
