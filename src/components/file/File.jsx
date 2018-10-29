import React from 'react';

const File = (props) => {
    const times = props.downloaded == 1 ? 'raz' : 'razy';
    const extension = props.filename.split('.')[1];

    return (
        <article className="file">
            <h3 className="file__title">{props.name}</h3>
            <a href="#" className="file__download">
                <img src={`/imgs/${extension}.svg`} alt="Pobierz" className="file__download-icon" />
            </a>
            <div className="file__description">
                <p>{props.description}</p>
            </div>
            <footer className="file__meta">
                <span className="file__filename">{props.filename}</span>
                <span className="file__size">{props.size}</span>
                <span className="file__count">pobrano {props.downloaded} {times}</span>
            </footer>
        </article>
    );
};

export default File;