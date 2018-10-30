import React from 'react';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';

const SignInPage = (props) => {
    return (
        <div className="content__centered">
            <PageHeader title="Logowanie" />
            <form action="" className="form form--signin" method="POST">
                <label for="username" className="form__label">Nazwa użytkownika</label>
                <input type="text" id="username" name="username" className="input input--dark"
                    placeholder="Nazwa użytkownika" required />
                <label for="password" className="form__label">Hasło</label>
                <input type="password" id="password" name="password" className="input input--dark"
                    placeholder="Hasło" required />
                <Button text="Zaloguj się" submit />
            </form>
        </div>
    );
};

export default SignInPage;