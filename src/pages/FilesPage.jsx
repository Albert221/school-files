import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import File from '../components/file/File';
import { getSubjectBreadcrumbs } from '../redux/helpers/breadcrumbs';

class FilesPage extends React.Component {
    render() {
        const { files, subjectId, breadcrumbs } = this.props;

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