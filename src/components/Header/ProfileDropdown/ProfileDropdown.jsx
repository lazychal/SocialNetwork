import React from 'react';
import s from './ProfileDropdown.module.scss'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faUser} from "@fortawesome/free-regular-svg-icons";
import {faFile} from "@fortawesome/free-regular-svg-icons/faFile";
import {faCog, faUnlockAlt} from "@fortawesome/free-solid-svg-icons";
import ProfileDropdownHeader from "./ProfileDropdownHeader";

const ProfileDropdown = ({dropWindow, setDropWindow, fullName, isAuth, logout}) => {
    return <div className={dropWindow ? s.profileDropdown : s.hideDropdown} onBlur={()=>{setDropWindow(!dropWindow)}}>

        <ProfileDropdownHeader fullName={fullName}/>

        <div className={s.profileBody}>
            <ul>
                <li>
                    <NavLink to={'/'}>
                        <FontAwesomeIcon icon={faUser}
                                         className={s.listAwesomeIcons}> </FontAwesomeIcon> Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>
                        <FontAwesomeIcon icon={faEnvelope}
                                         className={s.listAwesomeIcons}> </FontAwesomeIcon> Inbox
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>
                        <FontAwesomeIcon icon={faFile}
                                         className={s.listAwesomeIcons}> </FontAwesomeIcon> Activity
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to={'/'}>
                        <FontAwesomeIcon icon={faCog}
                                         className={s.listAwesomeIcons}> </FontAwesomeIcon> Settings
                    </NavLink>
                </li>
                {isAuth ?
                    <li onClick={logout} style={{cursor: 'pointer'}}>
                        <FontAwesomeIcon icon={faUnlockAlt}
                                         className={s.listAwesomeIcons}>
                        </FontAwesomeIcon> Sign Out
                    </li>
                    : <li>
                        <NavLink to={'/login'}>
                            <FontAwesomeIcon icon={faUnlockAlt}
                                             className={s.listAwesomeIcons}>
                            </FontAwesomeIcon>Sign In
                        </NavLink>
                    </li>
                }
            </ul>
        </div>
    </div>
};

export default ProfileDropdown;