// Import React Library
import React from 'react';
import PropTypes from 'prop-types';

// Import Other Libraries
import classNames from 'classnames';

// Import Styles
import './styles.scss';

/**
 * This is a component that conditionally renders content based on the type
 */

const Content = ({ type, className, children, props }) => {

    // Allow uses to pass their own classes as well as our own
    let contentClasses = classNames(
        [`content-${type}`],
        className
    );

    // Conditionally render based on type
    let renderContent;
    switch (type) {
        case 'text':
            return renderContent = <span { ...props } className={ contentClasses }> { children } </span>;
        case 'title':
            return renderContent = <h1 { ...props } className={ contentClasses }> { children } </h1>;
        case 'code':
            return renderContent = <code { ...props } className={ contentClasses }> { children } </code>;
    }

    ;

    return (
        <React.Fragment> { renderContent } </React.Fragment>
    );
};

Content.displayName = 'Content';

Content.propTypes = {
    children: PropTypes.node,
    // The type has to be either text, title, or code
    type: PropTypes.oneOf(['text', 'title', 'code']).isRequired
};

Content.defaultProps = {
    type: 'text'
};

export default Content;
