import React from 'react';
import SidebarItem from './SidebarItem';
import uuidv4 from 'uuid';

class Sidebar extends React.Component {
    state = {
        isEditing: false,
        sections: [
            {
                id: 1,
                name: '1 TI',
                classes: [
                    {
                        id: 1,
                        name: 'Systemy operacyjne'
                    }
                ]
            },
            {
                id: 2,
                name: '2 TI',
                classes: [
                    {
                        id: 2,
                        name: 'Systemy operacyjne'
                    },
                    {
                        id: 3,
                        name: 'Sieci komputerowe'
                    },
                    {
                        id: 4,
                        name: 'ASSO'
                    }
                ]
            }
        ]
    };

    constructor(props) {
        super(props);

        this.onClassClick = this.onClassClick.bind(this);
        this.onEditSectionsClick = this.onEditSectionsClick.bind(this);
        this.onAddSection = this.onAddSection.bind(this);
        this.onRemoveSection = this.onRemoveSection.bind(this);
        this.onAddClass = this.onAddClass.bind(this);
        this.onRemoveClass = this.onRemoveClass.bind(this);
    }

    render() {
        const {isEditing} = this.state;

        return (
            <nav className="main__sidebar sidebar">
                <ul className="sidebar__list">
                    {this.state.sections.map((section) =>
                        <SidebarItem key={section.id} name={section.name} icon="folder-o"
                            editing={isEditing} onRemove={() => this.onRemoveSection(section.id)}>
                            {section.classes.map((sectionClass) =>
                                <SidebarItem key={sectionClass.id} name={sectionClass.name} icon="file-o"
                                    editing={isEditing} to={`/class/${sectionClass.id}`}
                                    onRemove={() => this.onRemoveClass(sectionClass.id)} />
                            )}
                            {isEditing ? <SidebarItem name="Dodaj przedmiot" icon="plus"
                                onClick={() => this.onAddClass(section.id)} /> : ''}
                        </SidebarItem>
                    )}
                    {isEditing ? <SidebarItem name="Dodaj sekcję" icon="plus" onClick={this.onAddSection} /> : ''}
                    <SidebarItem name={isEditing ? 'Zakończ edycje' : 'Edytuj sekcje'}
                        icon="wrench" onClick={this.onEditSectionsClick} />
                </ul>
            </nav>
        );
    }

    onClassClick(classId) {
        this.props.history.push(`/class/${classId}`);
    }

    onEditSectionsClick() {
        this.setState((state) => state.isEditing = !state.isEditing);
    }

    // TODO: Move logic below to Redux
    onAddSection() {
        const name = prompt('Podaj nazwę sekcji:');

        if (name) {
            this.setState((state) => state.sections.push({
                id: uuidv4(),
                name: name,
                classes: []
            }));
        }
    }

    onRemoveSection(sectionId) {
        this.setState((state) =>
            state.sections = state.sections.filter((el) => el.id != sectionId));
    }

    onAddClass(sectionId) {
        const name = prompt('Podaj nazwę przedmiotu:');

        if (name) {
            const section = this.state.sections.find((el) => el.id == sectionId);
            this.setState(() => section.classes.push({
                id: uuidv4(),
                name: name,
            }));
        }
    }

    onRemoveClass(classId) {
        this.setState((state) => state.sections.map((section) => {
            section.classes = section.classes.filter((el) => el.id != classId);
        }));
    }
}

export default Sidebar;