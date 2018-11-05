import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../components/PageHeader';
import AddFileForm from '../components/AddFileForm';
import { addFile } from '../redux/actions';
import { connect } from 'react-redux';

const AddFilePage = ({ progress, onSubmit, subjectId }) => {
    return (
        <div>
            <PageHeader title="Dodawanie pliku" />
            <AddFileForm subjectId={subjectId} progress={progress} onSubmit={onSubmit} />
        </div>
    );
};

AddFilePage.propTypes = {
    subjectId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    progress: state.uploadProgress
});

const mapDispatchToProps = {
    onSubmit: addFile
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddFilePage);