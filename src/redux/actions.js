export const TOGGLE_EDITING_SECTIONS = 'TOGGLE_EDITING_SECTIONS';

export const ADD_SECTION = 'ADD_SECTION';
export const REMOVE_SECTION = 'REMOVE_SECTION';
export const ADD_SUBJECT = 'ADD_SUBJECT';
export const REMOVE_SUBJECT = 'REMOVE_SUBJECT';

export const ADD_FILE_REQUEST = 'ADD_FILE_REQUEST';
export const ADD_FILE_PROGRESS = 'ADD_FILE_PROGRESS';
export const ADD_FILE_RESPONSE = 'ADD_FILE_RESPONSE';

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

export function addFileRequest(file) {
    return dispatch => {
        dispatch({ type: ADD_FILE_REQUEST, ...file });

        setTimeout(() => dispatch(addFileProgress(25)), 4000);
    };
}

export function addFile(file) {
    return dispatch => {
        dispatch(addFileRequest(file));

        setTimeout(() => dispatch(addFileProgress(25)), 2000);
        setTimeout(() => dispatch(addFileProgress(80)), 3000);
        setTimeout(() => dispatch(addFileProgress(100)), 4000);
        setTimeout(() => {
            dispatch(addFileResponse({
                ...file,
                filename: 'lol.pdf',
                size: 324123
            }));
        }, 5000)
    };
}

export function addFileProgress(progress) {
    return { type: ADD_FILE_PROGRESS, progress: progress };
}

export function addFileResponse(file) {
    return { type: ADD_FILE_RESPONSE, ...file };
}