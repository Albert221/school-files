import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNavItem = (props) => {
    return (
        <li className="nav__item">
            <Link to={props.href} className="nav__link">{props.name}</Link>
        </li>
    )
};

export default HeaderNavItem;