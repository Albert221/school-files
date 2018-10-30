import { combineReducers } from 'redux';
import { ADD_SECTION, REMOVE_SECTION, ADD_SUBJECT, REMOVE_SUBJECT, TOGGLE_EDITING_SECTIONS } from './actions';
import uuidv4 from 'uuid/v4';

const schoolFilesState = combineReducers({
    editingSections,
    sections,
    files
});

function editingSections(state = false, action) {
    switch (action.type) {
        case TOGGLE_EDITING_SECTIONS:
            return !state;
        default:
            return state;
    }
}

const initialSections = [
    {
        id: '77cc92d2-2050-4f8b-8e0b-3dd0c8665e81',
        name: '2 TI',
        subjects: [
            {
                id: '54ed3668-fdc3-4fb5-8354-c97c516dbdad',
                name: 'Systemy operacyjne'
            },
            {
                id: '357a26f9-cb69-427b-9fcb-6724e0f31fe8',
                name: 'Sieci komputerowe'
            }
        ]
    }
];
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
        default:
            return state;
    }
}

export default schoolFilesState;