import React from 'react';
import s from './ProfileDropdown.module.scss'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ProfileDropdownBodyItem = ({navLinkPath, icon, title, logout}) => {
    return <li onClick={logout}>
        <NavLink to={navLinkPath}>
            <FontAwesomeIcon icon={icon}
                             className={s.listAwesomeIcons}> </FontAwesomeIcon> {title}
        </NavLink>
    </li>
};
