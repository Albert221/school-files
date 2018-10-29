import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTitle = (props) => {
    return (
        <h1 className="header__title">
            <Link to="/" className="header__title-link">d.rocks</Link>
        </h1>
    );
};

export default HeaderTitle;