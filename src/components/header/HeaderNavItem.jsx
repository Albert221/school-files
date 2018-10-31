import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderNavItem = (props) => {
    return (
        <li className="nav__item">
            <NavLink to={props.href} className="nav__link" activeClassName="nav__link--active">
                {props.name}
            </NavLink>
        </li>
    )
};

HeaderNavItem.propTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default HeaderNavItem;