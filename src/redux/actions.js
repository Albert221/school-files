import axios from 'axios';
import * as api from '../api';

export const TOGGLE_EDITING_SECTIONS = 'TOGGLE_EDITING_SECTIONS';

export const ADD_SECTION = 'ADD_SECTION';
export const REMOVE_SECTION = 'REMOVE_SECTION';
export const ADD_SUBJECT = 'ADD_SUBJECT';
export const REMOVE_SUBJECT = 'REMOVE_SUBJECT';

export const ADD_FILE = 'ADD_FILE_REQUEST';

export const UPLOAD_PROGRESS = 'UPLOAD_PROGRESS';

export function toggleEditingSections() {
    return { type: TOGGLE_EDITING_SECTIONS };
}

export function addSection(name) {
    return { type: ADD_SECTION, name: name };
}

export function removeSection(id) {
    return { type: REMOVE_SECTION, id: id };
}

export function addSubject(name, sectionId) {
    return { type: ADD_SUBJECT, name: name, sectionId: sectionId };
}

export function removeSubject(id) {
    return { type: REMOVE_SUBJECT, id: id };
}

export const addFile = file => dispatch => {
    return api
        .addFile(file, progress => dispatch(uploadProgress(progress)))
        .then(createdId => {
            dispatch(addFileResponse({
                ...file,
                id: createdId,
                filename: file.file.name,
                size: file.file.size
            }));
        });
}

export function addFileResponse(file) {
    return { type: ADD_FILE, ...file };
}

export function uploadProgress(progress) {
    return { type: UPLOAD_PROGRESS, progress: progress };
}