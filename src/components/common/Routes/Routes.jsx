import React from 'react';
import {Route, Switch} from "react-router-dom";
import {ProfileContainer} from "../../Profile/ProfileContainer";

export const PROFILE_PATH = '/profile';

export const Routes = () => {
    return (
        <Switch>
            <Route path={PROFILE_PATH} render={() => <ProfileContainer/>}/>
        </Switch>
    )
};