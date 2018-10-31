import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const SidebarItem = (props) => {
    const iconClasses = classNames(
        'fa',
        'fa-fw',
        'sidebar__link-icon',
        'fa-' + props.icon
    );

    const link = props.to ?
        <NavLink to={props.to} className="sidebar__link" activeClassName="sidebar__link--active">
            <span className={iconClasses}></span>
            {props.name}
        </NavLink>
        : <a onClick={props.onClick} className="sidebar__link">
            <span className={iconClasses}></span>
            {props.name}
        </a>;

    return (
        <li className="sidebar__item">
            {props.editing ? 
                <span className="sidebar__link">
                    <span className={iconClasses}></span>
                    {props.name}
                    <a className="sidebar__remove" onClick={props.onRemove}>
                        <span className="fa fa-close fa-fw"></span>
                    </a>
                </span>
                : link
            }
            {props.children ?
                <ul className="sidebar__list sidebar__list--sublist">
                    {props.children}
                </ul> : ''}
        </li>
    );
};

SidebarItem.propTypes = {
    to: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    editing: PropTypes.bool,
    onRemove: PropTypes.func,
    children: PropTypes.node
};

export default SidebarItem;