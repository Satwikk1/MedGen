import React from "react";
import { Redirect, Route } from "react-router";

import {getUser} from './authService';

function PrivateRoute({component: Component, ...rest}){
    return(
        <Route 
            {...rest}
            render={props=>{
                return getUser()? <Component {...props} />:<Redirect to={{pathname: '/'}} />
            }}
        />
    )
}

export {PrivateRoute}