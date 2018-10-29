import React from 'react';

const Header = (props) => {
    return (
        <header className="header">
            <div className="container header__container">
                {props.children}
            </div>
        </header>
    );
};

export default Header;