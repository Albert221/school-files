import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <header className="header">
            <div className="container header__container">
                {props.children}
            </div>
        </header>
    );
};

Header.propTypes = {
    children: PropTypes.node.isRequired
};

export default Header;