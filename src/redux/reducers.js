import { combineReducers } from 'redux';
import { ADD_SECTION, REMOVE_SECTION, ADD_SUBJECT, REMOVE_SUBJECT, TOGGLE_EDITING_SECTIONS, ADD_FILE, UPLOAD_PROGRESS } from './actions';
import uuidv4 from 'uuid/v4';

const schoolFilesState = combineReducers({
    editingSections,
    sections,
    files,
    uploadProgress
});

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
        case ADD_SECTION:
            return [
                ...state,
                {
                    id: uuidv4(),
                    name: action.name,
                    subjects: []
                }
            ];
        case REMOVE_SECTION:
            return state.filter(el => el.id !== action.id);
        case ADD_SUBJECT:
            const section = state.find(el => el.id === action.sectionId);

            return [
                ...state.filter(el => el.id !== action.sectionId),
                {
                    ...section,
                    subjects: [
                        ...section.subjects,
                        {
                            id: uuidv4(),
                            name: action.name
                        }
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
                    id: uuidv4(),
                    subjectId: action.subjectId,
                    name: action.name,
                    description: action.description,
                    filename: action.file.name,
                    size: action.file.size,
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