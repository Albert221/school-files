export const TOGGLE_EDITING_SECTIONS = 'TOGGLE_EDITING_SECTIONS';

export const ADD_SECTION = 'ADD_SECTION';
export const REMOVE_SECTION = 'REMOVE_SECTION';
export const ADD_SUBJECT = 'ADD_SUBJECT';
export const REMOVE_SUBJECT = 'REMOVE_SUBJECT';

export const ADD_FILE = 'ADD_FILE';

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

export function addFile() {
    return { type: ADD_FILE, name: name, description: description,  };
}