import React from 'react';
import PropTypes from 'prop-types';

const HeaderNav = (props) => {
    return (
        <nav className="nav header__nav">
            <h2 className="nav__title">Nawigacja</h2>
            <ul className="nav__list">
                {props.children}
            </ul>
        </nav>
    );
};

HeaderNav.propTypes = {
    children: PropTypes.node.isRequired
};

export default HeaderNav;