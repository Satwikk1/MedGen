import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthProvider } from "../functions/contexts/AuthContext";
import {PublicRoute} from '../utils/PublicRoute';
import {PrivateRoute} from '../utils/PrivateRoute';
import {Default} from './Default';
import { Login } from './Login';
import { Home } from './Home';
import { QuizForm } from './QuizForm';

const Routes = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Switch>
                    <PublicRoute exact path="/" component={Login} />
                    <PrivateRoute exact path="/home" component={Home} />
                    <PrivateRoute exact path='/createquiz' component={QuizForm} />
                    <Route component={Default} />
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    )
}

export { Routes }
