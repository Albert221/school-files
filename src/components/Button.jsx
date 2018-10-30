import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Button = (props) => {
    const classes = classNames('btn', 'btn--primary', {
        'content__action': props.action
    })

    return props.submit ?
        <input type="submit" className={classes} />
        : <Link to={props.href} className={classes}>
            {props.text}
        </Link>
    ;
};

export default Button;