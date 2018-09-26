import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';
/**
 * This is a dumb component that only recieves properties from a smart component.
 * Dumb components are usually functions and not classes.
 *
 * @param props the props given by the smart component.
 */
const Content = ({ type, children, props }) => {

    let renderType;

    if (type === 'text') {
        renderType = <span { ...props } className='content-text'> { children } </span>;
    } else {
        renderType = <h1 { ...props } className='content-title'> { children } </h1>;
    }

    ;

    return (
        <React.Fragment> { renderType } </React.Fragment>
    );
};

Content.displayName = 'Content';

Content.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(['text', 'title'])
};

Content.defaultProps = {
    type: 'text'
};

export default Content;
