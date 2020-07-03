import React from 'react';
import s from './ProfileHeader.module.scss';
import {NavLink} from "react-router-dom";

const ProfileMenu = (props) => {

    return <div className={s.header}>
        <div className={s.container}>

            <div className={s.mainMenu}>
                <nav>
                    <ul className={s.navUl}>
                        <li><NavLink to='/' className={s.navLink}>Timeline</NavLink></li>
                        <li><NavLink to='/' className={s.navLink}>About</NavLink></li>
                        <li><NavLink to='/' className={s.navLink}>Photos</NavLink></li>
                        <li><NavLink to='/' className={s.navLink}>Friends</NavLink></li>
                        <li><NavLink to='/' className={s.navLink}>More</NavLink></li>
                    </ul>
                </nav>
                {/*<div className={s.button}>*/}
                    <button className={s.button}>Edit Profile</button>
                {/*</div>*/}
            </div>


        </div>
    </div>
};

export default ProfileMenu;