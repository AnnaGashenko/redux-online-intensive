// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { withRouter }  from 'react-router-dom';

// Pages
import { Login, Signup, Feed, Profile, NewPassword } from '../pages';

// Routes
import Private from './Private';
import Public from './Public';

// Components
import { Loading } from '../components';

// Actions
import { authActions } from '../bus/auth/actions'

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get('isAuthenticated'),
        isInitialize: state.auth.get('isInitialize'),
    }
};

const mapDispatchToProps = {
    isInitializeAsync: authActions.initializeAsync
};

@hot(module)
@withRouter
@connect(mapStateToProps, mapDispatchToProps)

export default class App extends Component {
    componentDidMount() {
        this.props.isInitializeAsync();
    }

    render () {
        const {isAuthenticated, isInitialize} = this.props;

        if(!isInitialize) {
            return <Loading />;
        }
        return isAuthenticated ? <Private /> : <Public />;
    }
}
