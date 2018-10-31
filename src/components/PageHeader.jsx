import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = (props) => {
    return (
        <header className="content__header">
            <h2 className="content__title">{props.title}</h2>
            {props.children}
        </header>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default PageHeader;