import React from 'react';
import { toggleEditingSections, fetchMenu, addSection, removeSection, addSubject, removeSubject } from '../../redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SidebarItem from './SidebarItem';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.onClassClick = this.onClassClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchMenu();
    }

    render() {
        const {
            signedIn,
            editingSections,
            sections,
            onEditSections,
            onAddSection,
            onRemoveSection,
            onAddSubject,
            onRemoveSubject
        } = this.props;

        return (
            <nav className="main__sidebar sidebar">
                <ul className="sidebar__list">
                    {sections.map((section) =>
                        <SidebarItem key={section.id} name={section.name} icon="folder-o"
                            editing={editingSections} onRemove={() => onRemoveSection(section.id)}>
                            {section.subjects.map((subject) =>
                                <SidebarItem key={subject.id} name={subject.name} icon="file-o"
                                    editing={editingSections} to={`/class/${subject.id}`}
                                    onRemove={() => onRemoveSubject(subject.id)} />
                            )}
                            {editingSections ? <SidebarItem name="Dodaj przedmiot" icon="plus"
                                onClick={() => onAddSubject(section.id)} /> : ''}
                        </SidebarItem>
                    )}
                    {editingSections ? <SidebarItem name="Dodaj sekcję" icon="plus" onClick={onAddSection} /> : ''}
                    {signedIn ? 
                        <SidebarItem name={editingSections ? 'Zakończ edycje' : 'Edytuj sekcje'}
                            icon="wrench" onClick={onEditSections} />
                        : null}
                </ul>
            </nav>
        );
    }

    onClassClick(classId) {
        this.props.history.push(`/class/${classId}`);
    }
}

Sidebar.propTypes = {
    signedIn: PropTypes.bool.isRequired,
    editingSections: PropTypes.bool.isRequired,
    sections: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        subjects: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired).isRequired
    }).isRequired).isRequired,
    fetchMenu: PropTypes.func.isRequired,
    onEditSections: PropTypes.func.isRequired,
    onAddSection: PropTypes.func.isRequired,
    onRemoveSection: PropTypes.func.isRequired,
    onAddSubject: PropTypes.func.isRequired,
    onRemoveSubject: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    signedIn: state.signedIn,
    editingSections: state.editingSections,
    sections: state.sections
});

const mapDispatchToProps = dispatch => ({
    fetchMenu: () => dispatch(fetchMenu()),
    onEditSections: () => dispatch(toggleEditingSections()),
    onAddSection: () => {
        const name = prompt('Podaj nazwę sekcji:');
        if (!name) return;

        dispatch(addSection(name));
    },
    onRemoveSection: id => dispatch(removeSection(id)),
    onAddSubject: sectionId => {
        const name = prompt('Podaj nazwę przedmiotu:');
        if (!name) return;

        dispatch(addSubject(name, sectionId))
    },
    onRemoveSubject: id => dispatch(removeSubject(id))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Sidebar)
);