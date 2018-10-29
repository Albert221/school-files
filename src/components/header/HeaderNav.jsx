import React from 'react';

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

export default HeaderNav;