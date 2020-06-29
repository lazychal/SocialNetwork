import React from 'react';
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {faEnvelope, faUser} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile} from "@fortawesome/free-regular-svg-icons/faFile";
import {faCog, faUnlockAlt} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
    debugger
    return <header className={s.header}>
        <div className={s.container}>

                <div className={s.mainMenu}>
                    <nav>
                        <ul className={s.navUl}>
                            <li><NavLink to='/' className={s.navLink}>Home</NavLink></li>
                            <li><NavLink to='' className={s.navLink}>Message</NavLink></li>
                            <li><NavLink to='' className={s.navLink}>Notification</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className={s.logo}>
                    <img alt='logo' src='https://www.watersignal.com/wp-content/uploads/2016/05/footstep_icon2-150x150.png'/>
                </div>
                <div className={s.loginBlock}>
                    <div className={s.searchContainer}>
                        <form className={s.topSearchBox} action="">
                            <input type="text" placeholder='Search' className={s.topSearchField}/>
                            <button className={s.topSearchBtn}>S</button>
                        </form>
                    </div>
                    <div className={s.profileSettingBox}>
                        {/*<a className={s.profileTrigger} href="" >*/}
                            <img className={s.userPhoto} src={props.userPic} alt="UserData Mini"/>
                        {/*</a>*/}
                            <div className={s.profileDropdown}>
                                <div className={s.profileHead}>
                                    <h5 className={s.fullName}>
                                        <NavLink to={'/'}>
                                            {props.fullName}
                                        </NavLink>
                                    </h5>
                                    <NavLink to={'/'} className={s.email}>email@email.com</NavLink>
                                </div>
                                <div className={s.profileBody}>
                                    <ul>
                                        <li>
                                            {/*Вариант, где ховер загорается отдельно или на тексте или на иконке...*/}
                                            <a href="#">
                                                <FontAwesomeIcon icon={faUser} className={s.listAwesomeIcons}> </FontAwesomeIcon>  Profile
                                            </a>
                                        </li>
                                        <li><FontAwesomeIcon icon={faEnvelope} className={s.listAwesomeIcons}> </FontAwesomeIcon> Inbox</li>
                                        <li><FontAwesomeIcon icon={faFile} className={s.listAwesomeIcons}> </FontAwesomeIcon> Activity</li>
                                    </ul>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faCog} className={s.listAwesomeIcons}> </FontAwesomeIcon> Settings</li>
                                        <li><FontAwesomeIcon icon={faUnlockAlt} className={s.listAwesomeIcons}> </FontAwesomeIcon> Sign Out</li>
                                    </ul>
                                </div>
                            </div>

                        {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                            : <NavLink to={'/login'}>Login</NavLink>}
                    </div>
                </div>

        </div>
    </header>
};

export default Header;