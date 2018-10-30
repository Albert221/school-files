import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../scss/style.scss';
import Header from './components/header/Header';
import HeaderSearch from './components/header/HeaderSearch';
import HeaderTitle from './components/header/HeaderTitle';
import HeaderNav from './components/header/HeaderNav';
import HeaderNavItem from './components/header/HeaderNavItem';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';
import HomePage from './pages/HomePage';
import FilesPage from './pages/FilesPage';
import AddFilePage from './pages/AddFilePage';
import SignInPage from './pages/SignInPage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header>
                        <HeaderTitle />
                        <HeaderSearch />
                        <HeaderNav>
                            {/* <HeaderNavItem href="#" name="Ustawienia" />
                            <HeaderNavItem href="#" name="Wyloguj się" /> */}
                            <HeaderNavItem href="/signin" name="Zaloguj się" />
                        </HeaderNav>
                    </Header>
                    <Main sidebar={<Sidebar />}>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/signin" component={SignInPage} />
                        <Route exact path="/class/:id" component={FilesPage} />
                        <Route exact path="/class/:id/add" component={AddFilePage} />
                    </Main>
                </div>
            </Router>
        );
    }
}

export default App;