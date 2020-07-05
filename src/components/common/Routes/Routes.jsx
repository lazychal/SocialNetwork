import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProfileContainer from "../../Profile/ProfileContainer";

export const PROFILE_PATH = '/profile/:userId?';

export const Routes = () => {
    return (



    <Switch>
        <Route path={PROFILE_PATH} render={(router) => <ProfileContainer router={router}/>}/>
    </Switch>


    )
};