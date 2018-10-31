import React from 'react';
import PropTypes from 'prop-types';

const Main = (props) => {
    return (
        <div className="main container">
            {props.sidebar}
            <main className="main__content content">
                {props.children}
            </main>
        </div>
    );
};

Main.propTypes = {
    sidebar: PropTypes.node,
    children: PropTypes.node.isRequired
};

export default Main;