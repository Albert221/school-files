import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import File from '../components/file/File';
import { getSubjectBreadcrumbs } from '../redux/helpers/breadcrumbs';

class FilesPage extends React.Component {
    render() {
        const { files, breadcrumbs, subjectId } = this.props;

        return (
            <div>
                <PageHeader title={`Lista plików w ${breadcrumbs}`}>
                    <Button href={`/class/${subjectId}/add`} text="Dodaj plik" action />
                </PageHeader>
                {files.map((file, i) =>
                    <File name={file.name} description={file.description} filename={file.filename}
                        size={file.size} downloaded={file.downloaded} key={i} />
                )}
            </div>
        );
    }
}

FilesPage.propTypes = {
    subjectId: PropTypes.string.isRequired,
    breadcrumbs: PropTypes.string,
    files: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        filename: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        downloaded: PropTypes.number.isRequired
    }).isRequired).isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        breadcrumbs: getSubjectBreadcrumbs(state, ownProps.subjectId),
        files: state.files.filter(el => el.subjectId === ownProps.subjectId)
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        null
    )(FilesPage)
);