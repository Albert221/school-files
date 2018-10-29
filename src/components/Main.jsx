import React from 'react';

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

export default Main;