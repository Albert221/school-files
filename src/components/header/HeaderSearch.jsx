import React from 'react';

const HeaderSearch = (props) => {
    return (
        <form action="?" className="header__search search">
            <input type="search" className="search__input input" placeholder="Wpisz co chcesz wyszukać..." pattern=".{3,}" title="Co najmniej 3 znaki." autoFocus required />
        </form>
    );
};

export default HeaderSearch;