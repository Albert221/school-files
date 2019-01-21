import { combineReducers } from 'redux';
import { FETCHED_MENU, ADDED_SECTION, REMOVED_SECTION, ADDED_SUBJECT, REMOVED_SUBJECT, TOGGLE_EDITING_SECTIONS, ADD_FILE, UPLOAD_PROGRESS, SIGNED_IN, SIGNED_OUT } from './actions';

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
        case SIGNED_OUT:
            return false;
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
            const sectionId = action.subject.section.id;
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
        case REMOVED_SUBJECT:
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