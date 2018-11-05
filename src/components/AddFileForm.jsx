import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class AddFileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            file: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFile(event) {
        this.setState({ file: event.target.files[0] });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { name, description, file } = this.state;

        this.props.onSubmit({
            name: name,
            description: description,
            file: file,
            subjectId: this.props.subjectId
        });
    }

    render() {
        const { name, description } = this.state;
        const { progress } = this.props;

        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label htmlFor="name" className="form__label">Nazwa</label>
                <input type="text" id="name" className="input" placeholder="Nazwa"
                    name="name" onChange={this.handleChange} value={name} required />
                <label htmlFor="description" className="form__label">Opis pliku</label>
                <textarea id="description" rows="10" className="input"
                    placeholder="Opis pliku" name="description"
                    onChange={this.handleChange} value={description} required></textarea>
                <label htmlFor="file" className="form__label">Plik</label>
                <input type="file" id="file" className="input"
                    onChange={this.handleFile} required />
                <Button text="Dodaj plik" submit />
                {progress ?
                    <span> {progress}% wysłano</span>
                : ''}
            </form>
        );
    }
}

AddFileForm.propTypes = {
    subjectId: PropTypes.string.isRequired,
    progress: PropTypes
        .oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default AddFileForm;