import React from 'react';

const PageHeader = (props) => {
    return (
        <header className="content__header">
            <h2 className="content__title">{props.title}</h2>
            {props.children}
        </header>
    );
};

export default PageHeader;