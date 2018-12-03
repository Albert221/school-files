import React from 'react';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { signIn } from '../redux/actions';

class SignInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.onFieldChange = this.onFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <div className="content__centered">
                <PageHeader title="Logowanie" />
                <form className="form form--signin" onSubmit={this.onSubmit}>
                    <label htmlFor="email" className="form__label">Adres email</label>
                    <input type="email" id="email" className="input input--dark"
                        placeholder="Adres email" onChange={this.onFieldChange} required />
                    <label htmlFor="password" className="form__label">Hasło</label>
                    <input type="password" id="password" className="input input--dark"
                        placeholder="Hasło" onChange={this.onFieldChange} required />
                    <Button text="Zaloguj się" submit />
                </form>
            </div>
        );
    }

    onFieldChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.onSignIn(this.state.email, this.state.password);
    }
}

const mapDispatchToProps = dispatch => ({
    onSignIn: (email, password) => dispatch(signIn(email, password))
});

export default withRouter(
    connect(null, mapDispatchToProps)(SignInPage)
);