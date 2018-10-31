export function getSubjectBreadcrumbs(state, subjectId) {
    return state.sections.map(section => {
        const subject = section.subjects.find(el => el.id === subjectId);
        if (subject) {
            return `${section.name}/${subject.name}`;
        }
    });
}