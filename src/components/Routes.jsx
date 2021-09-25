import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthProvider } from "../functions/contexts/AuthContext";

import {Default} from './Default';
import { Login } from './Login';
import { Home } from './Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/home" component={Home} />
                    <Route component={Default} />
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    )
}

export { Routes }
