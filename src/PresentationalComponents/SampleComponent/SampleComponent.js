// Import React Library
import React from 'react';
import PropTypes from 'prop-types';

// Import Other Libraries
import classNames from 'classnames';

// Import Styles
import './styles.scss';

/**
 * This is an example component to serve as a template
 */

const SampleComponent = ({ className, children, props}) => {

    // Allow uses to pass their own classes as well as our own
    let sampleClasses = classNames(
        'sampleClass',
        className
    );

    return (

        // Spread props so users can prop drill
        <span className={ sampleClasses } { ...props }> { children } </span>
    );
};

// Actually name the component for easier tracking
SampleComponent.displayName = 'SampleComponent';

SampleComponent.propTypes = {
    // allow user to pass anything and everything
    children: PropTypes.node
};

export default SampleComponent;
