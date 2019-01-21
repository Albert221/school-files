import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
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
import { loadJwt, signOut } from './redux/actions';
import { connect } from 'react-redux';

class App extends React.Component {
    componentDidMount() {
        this.props.loadJwt();
    }

    render() {
        const { signedIn, signOut } = this.props;

        return (
            <Router>
                <div>
                    <Header>
                        <HeaderTitle />
                        <HeaderSearch />
                        <HeaderNav>
                            {signedIn ?
                                <li className="nav__item">
                                    <a onClick={signOut} className="nav__link">
                                        Wyloguj się
                                    </a>
                                </li>
                                : <HeaderNavItem href="/signin" name="Zaloguj się" />
                            }
                        </HeaderNav>
                    </Header>
                    <Main sidebar={<Sidebar />}>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/signin" component={SignInPage} />
                        <Route exact path="/class/:id"
                            render={props => <FilesPage subjectId={props.match.params.id} />} />
                        <Route exact path="/class/:id/add"
                            render={props => <AddFilePage subjectId={props.match.params.id} />} />
                    </Main>
                </div>
            </Router>
        );
    }
}

App.propTypes = {
    signedIn: PropTypes.bool.isRequired,
    loadJwt: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    signedIn: state.signedIn
});

const mapDispatchToProps = dispatch => ({
    loadJwt: () => dispatch(loadJwt()),
    signOut: () => dispatch(signOut())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);