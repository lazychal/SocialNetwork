import React, {useState} from 'react';
import s from './ProfileDropdown.module.scss';
import {faEnvelope, faUser} from "@fortawesome/free-regular-svg-icons";
import {faFile} from "@fortawesome/free-regular-svg-icons/faFile";
import {faCog, faUnlockAlt} from "@fortawesome/free-solid-svg-icons";
import {ProfileDropdownBodyItem} from "./ProfileDropdownBodyItem";

const ProfileDropdownBody = ({isAuth, logout, state}) => {
    debugger
    return <div className={s.profileBody}>
        <ul>
            <ProfileDropdownBodyItem navLinkPath={state[0].navLinkPath} icon={state[0].icon} title={state[0].title}/>
            <ProfileDropdownBodyItem navLinkPath={state[1].navLinkPath} icon={state[1].icon} title={state[1].title}/>
            <ProfileDropdownBodyItem navLinkPath={state[2].navLinkPath} icon={state[2].icon} title={state[2].title}/>
        </ul>
        <ul>
            <ProfileDropdownBodyItem navLinkPath={state[3].navLinkPath} icon={state[3].icon} title={state[3].title}/>

            {isAuth ?
                <ProfileDropdownBodyItem navLinkPath={state[4].navLinkPath}
                                         logout={logout} icon={state[4].icon} title={state[4].title}/>
                :
                <ProfileDropdownBodyItem navLinkPath={state[5].navLinkPath}
                                         icon={state[5].icon} title={state[5].title}/>
            }
        </ul>
    </div>
};

export const ProfileDropdownBodyContainer = ({isAuth, logout}) => {

    const [state, setState] = useState(
        [
            {navLinkPath: '/', icon: faUser, title: 'Profile'},
            {navLinkPath: '/', icon: faEnvelope, title: 'Inbox'},
            {navLinkPath: '/', icon: faFile, title: 'Activity'},
            {navLinkPath: '/', icon: faCog, title: 'Settings'},
            {navLinkPath: '/', icon: faUnlockAlt, title: 'Sign Out'},
            {navLinkPath: '/login', icon: faUnlockAlt, title: 'Sign In'}
        ]
    );

    return <ProfileDropdownBody isAuth={isAuth} logout={logout} state={state}/>
};

