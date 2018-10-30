import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNavItem = (props) => {
    return (
        <li className="nav__item">
            <NavLink to={props.href} className="nav__link" activeClassName="nav__link--active">{props.name}</NavLink>
        </li>
    )
};

export default HeaderNavItem;