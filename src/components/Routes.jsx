import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Default} from './Default';
import { Login } from './Login';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/auth" component={Login} />
                <Route component={Default} />
            </Switch>
        </BrowserRouter>
    )
}

export { Routes }
