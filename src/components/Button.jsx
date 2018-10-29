import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to={props.href} className="btn btn--primary content__action">
            {props.text}
        </Link>
    );
};

export default Button;