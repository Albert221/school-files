import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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

Button.propTypes = {
    action: PropTypes.bool,
    href: PropTypes.string,
    submit: PropTypes.bool,
    text: PropTypes.string.isRequired
};

export default Button;