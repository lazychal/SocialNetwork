import React from 'react';
import s from './ProfileDropdown.module.scss';
import ProfileDropdownHeader from "./ProfileDropdownHeader";
import {ProfileDropdownBodyContainer} from "./ProfileDropdownBody";

const ProfileDropdown = ({dropWindow, setDropWindow, fullName, isAuth, logout}) => {
    return <div className={dropWindow ? s.profileDropdown : s.hideDropdown} onBlur={()=>{setDropWindow(!dropWindow)}}>

        <ProfileDropdownHeader fullName={fullName}/>
        <ProfileDropdownBodyContainer isAuth={isAuth} logout={logout}/>

    </div>
};

export default ProfileDropdown;