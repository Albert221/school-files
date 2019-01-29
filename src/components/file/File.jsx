import React from 'react';
import PropTypes from 'prop-types';
import { sendFileUrl } from '../../api';

const File = ({ file }) => {
    const times = file.downloaded == 1 ? 'raz' : 'razy';
    const extension = file.filename.split('.')[1];

    return (
        <article className="file">
            <h3 className="file__title">{file.name}</h3>
            <a href={sendFileUrl(file.id)} className="file__download">
                <img src={`/imgs/${extension}.svg`} alt="Pobierz" className="file__download-icon" />
            </a>
            <div className="file__description">
                <p>{file.description}</p>
            </div>
            <footer className="file__meta">
                <span className="file__filename">{file.filename}</span>
                <span className="file__size">{file.size}</span>
                <span className="file__count">pobrano {file.downloaded} {times}</span>
            </footer>
        </article>
    );
};

File.propTypes = {
    file: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        filename: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        downloaded: PropTypes.number.isRequired
    }).isRequired
};

export default File;