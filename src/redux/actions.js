import * as api from '../api';

export const SIGNED_IN = 'SIGNED_IN';
export const SIGNED_OUT = 'SIGNED_OUT';

export const TOGGLE_EDITING_SECTIONS = 'TOGGLE_EDITING_SECTIONS';

export const FETCHED_MENU = 'FETCHED_MENU';

export const ADDED_SECTION = 'ADDED_SECTION';
export const REMOVED_SECTION = 'REMOVED_SECTION';

export const ADDED_SUBJECT = 'ADDED_SUBJECT';
export const REMOVED_SUBJECT = 'REMOVED_SUBJECT';

export const ADD_FILE = 'ADD_FILE_REQUEST';

export const UPLOAD_PROGRESS = 'UPLOAD_PROGRESS';

export const FETCHED_FILES = 'FETCHED_FILES';

export const signIn = (email, password) => dispatch => {
    return api
        .signIn(email, password)
        .then(jwt => {
            sessionStorage.setItem('userJwt', jwt);
            dispatch(signedIn());
        });
};

export const loadJwt = () => dispatch => {
    const jwt = sessionStorage.getItem('userJwt');
    if (!jwt || jwt === '') {
        return;
    }

    dispatch(signedIn());
};

export function signedIn() {
    return { type: SIGNED_IN };
}

export const signOut = () => dispatch => {
    sessionStorage.removeItem('userJwt');

    dispatch(signedOut());
};

export function signedOut() {
    return { type: SIGNED_OUT };
}

export function toggleEditingSections() {
    return { type: TOGGLE_EDITING_SECTIONS };
}

export const fetchMenu = () => dispatch => {
    return api
        .fetchMenu()
        .then(data => data.map(section => ({
            id: section.id,
            name: section.name,
            slug: section.slug,
            subjects: section.subjects.map(subject => ({
                id: subject.id,
                name: subject.name,
                slug: subject.slug
            }))
        })))
        .then(sections => dispatch(fetchedMenu(sections)));
}

export function fetchedMenu(sections) {
    return { type: FETCHED_MENU, sections: sections };
}

export const addSection = name => dispatch => {
    return api
        .addSection(name)
        .then(section => dispatch(addedSection(section)));
}

export function addedSection(section) {
    return { type: ADDED_SECTION, section: section };
}

export const removeSection = id => dispatch => {
    return api
        .removeSection(id)
        .then(() => dispatch(removedSection(id)));
}

export function removedSection(id) {
    return { type: REMOVED_SECTION, id: id };
}

export const addSubject = (name, sectionId) => dispatch => {
    return api
        .addSubject(name, sectionId)
        .then(subject => dispatch(addedSubject(subject)));
};

export function addedSubject(subject) {
    return { type: ADDED_SUBJECT, subject: subject };
}

export const removeSubject = id => dispatch => {
    return api
        .removeSubject(id)
        .then(() => dispatch(removedSubject(id)))
};

export function removedSubject(id) {
    return { type: REMOVED_SUBJECT, id: id };
}

export const addFile = fileForm => dispatch => {
    return api
        .uploadFile(fileForm.file, progress => dispatch(uploadProgress(progress)))
        .then(uploadedFilename => api.addFile({ filename: uploadedFilename, ...fileForm }))
        .then(file => dispatch(addedFile(file)))
        .then(() => dispatch(fetchFiles(fileForm.subjectId)));
}

export function addedFile(file) {
    return { type: ADD_FILE, ...file };
}

export function uploadProgress(progress) {
    return { type: UPLOAD_PROGRESS, progress: progress };
}

export const fetchFiles = subjectId => dispatch => {
    return api
        .fetchFiles(subjectId)
        .then(files => dispatch(fetchedFiles(files)));
}

export function fetchedFiles(files) {
    return { type: FETCHED_FILES, files: files };
}