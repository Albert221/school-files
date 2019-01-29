import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import File from '../components/file/File';
import { getSubjectBreadcrumbs } from '../redux/helpers/breadcrumbs';
import { fetchFiles } from '../redux/actions';

class FilesPage extends React.Component {
    constructor() {
        super();
        this.state = {lastSubjectId: null};
    }

    componentDidUpdate() {
        this.fetchFiles();
    }

    fetchFiles() {
        const { subjectId, fetchFiles } = this.props;

        if (this.state.lastSubjectId == subjectId) {
            // Don't do anything if last subject id is the same as current.
            return;
        }
        this.setState({lastSubjectId: subjectId});
        fetchFiles(subjectId);
    }

    render() {
        const { files, breadcrumbs, subjectId } = this.props;

        return (
            <div>
                <PageHeader title={`Lista plików w ${breadcrumbs}`}>
                    <Button href={`/class/${subjectId}/add`} text="Dodaj plik" action />
                </PageHeader>
                {files.map((file, i) =>
                    <File file={file} key={i} />
                )}
            </div>
        );
    }
}

FilesPage.propTypes = {
    subjectId: PropTypes.string.isRequired,
    breadcrumbs: PropTypes.string,
    files: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
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
        files: state.files
    };
};

const mapDispatchToProps = {
    fetchFiles: fetchFiles
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(FilesPage)
);