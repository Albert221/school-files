import React from 'react';
import Header from './components/header/Header';
import '../scss/style.scss';
import HeaderSearch from './components/header/HeaderSearch';
import HeaderTitle from './components/header/HeaderTitle';
import HeaderNav from './components/header/HeaderNav';
import HeaderNavItem from './components/header/HeaderNavItem';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FilesPage from './pages/FilesPage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header>
                        <HeaderTitle />
                        <HeaderSearch />
                        <HeaderNav>
                            <HeaderNavItem href="#" name="Ustawienia" />
                            <HeaderNavItem href="#logout" name="Wyloguj się" />
                        </HeaderNav>
                    </Header>
                    <Main sidebar={<Sidebar />}>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/class/:id" component={FilesPage} />
                    </Main>
                    </div>
            </Router>
        );
    }
}

export default App;