import React from 'react';
import s from './ProfileDropdown.module.scss'
import {NavLink} from "react-router-dom";

const ProfileDropdownHeader = ({fullName}) => {

    return <div className={s.profileHead}>
        <ul>
            <li>
                <h5 className={s.fullName}>
                    <NavLink to={'/'}>
                        {fullName}
                    </NavLink>
                </h5>
            </li>
            <li>
                <NavLink to={'/'} className={s.email}>email@email.com</NavLink>
            </li>
        </ul>
    </div>
};

export default ProfileDropdownHeader;