import { combineReducers } from 'redux';
import { FETCHED_MENU, ADDED_SECTION, REMOVED_SECTION, ADDED_SUBJECT, REMOVE_SUBJECT, TOGGLE_EDITING_SECTIONS, ADD_FILE, UPLOAD_PROGRESS, SIGNED_IN } from './actions';
import uuidv4 from 'uuid/v4';

const schoolFilesState = combineReducers({
    signedIn,
    editingSections,
    sections,
    files,
    uploadProgress
});

function signedIn(state = false, action) {
    switch (action.type) {
        case SIGNED_IN:
            return true;
        default:
            return state;
    }
}

function editingSections(state = false, action) {
    switch (action.type) {
        case TOGGLE_EDITING_SECTIONS:
            return !state;
        default:
            return state;
    }
}

function sections(state = [], action) {
    switch (action.type) {
        case FETCHED_MENU:
            return action.sections;
        case ADDED_SECTION:
            return [
                ...state,
                action.section
            ];
        case REMOVED_SECTION:
            return state.filter(el => el.id !== action.id);
        case ADDED_SUBJECT:
            const sectionId = action.subject.sectionId;
            const section = state.find(el => el.id === sectionId);

            return [
                ...state.filter(el => el.id !== sectionId),
                {
                    ...section,
                    subjects: [
                        ...section.subjects,
                        action.subject
                    ]
                }
            ];
        case REMOVE_SUBJECT:
            return state.map(el => {
                return {
                    ...el,
                    subjects: el.subjects.filter(el => el.id !== action.id)
                };
            });
        default:
            return state;
    }
}

function files(state = [], action) {
    switch (action.type) {
        case ADD_FILE:
            return [
                ...state,
                {
                    id: action.id,
                    subjectId: action.subjectId,
                    name: action.name,
                    description: action.description,
                    filename: action.filename,
                    size: action.size,
                    downloaded: 0
                }
            ];
        default:
            return state;
    }
}

function uploadProgress(state = false, action) {
    switch (action.type) {
        case UPLOAD_PROGRESS:
            return action.progress;
        default:
            return state;
    }
}

export default schoolFilesState;