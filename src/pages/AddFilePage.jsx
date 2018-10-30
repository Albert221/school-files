import React from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';

const AddFilePage = (props) => {
    return (
        <div>
            <PageHeader title="Dodawanie pliku" />
            <form action="#" className="form" method="POST">
                <label htmlFor="name" className="form__label">Nazwa</label>
                <input type="text" id="name" className="input" placeholder="Nazwa" required />
                <label htmlFor="description" className="form__label">Opis pliku</label>
                <textarea id="description" rows="10" className="input" placeholder="Opis pliku" required></textarea>
                <label htmlFor="file" className="form__label">Plik</label>
                <input type="file" id="file" className="input" required 
                />
                <Button text="Dodaj plik" submit />
            </form>
        </div>
    );
};

export default AddFilePage;