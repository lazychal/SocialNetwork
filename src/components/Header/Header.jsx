import React, {useEffect, useState} from 'react';
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {faEnvelope, faUser} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile} from "@fortawesome/free-regular-svg-icons/faFile";
import {faCog, faSearch, faUnlockAlt} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {

    const [dropWindow, setDropWindow] = useState(false);

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
                <img alt='logo'
                     src='https://www.watersignal.com/wp-content/uploads/2016/05/footstep_icon2-150x150.png'/>
            </div>
            <div className={s.loginBlock}>
                <div className={s.searchContainer}>
                    <form className={s.topSearchBox} action="">
                        <input type="text" placeholder='Search' className={s.topSearchField}/>
                        {/*<button className={s.topSearchBtn}>S</button>*/}
                        <FontAwesomeIcon icon={faSearch} style={{fontSize: '20px'}}> </FontAwesomeIcon>
                    </form>
                </div>
                <div className={s.profileSettingBox}>
                    {/*<a className={s.profileTrigger} href="" >*/}
                    <img className={s.userPhoto} src={props.userPic} alt="UserData Mini"
                         onClick={()=>{setDropWindow(!dropWindow)}}
                    />
                    {/*</a>*/}

                    <div className={dropWindow ? s.profileDropdown : s.hideDropdown} onBlur={()=>{setDropWindow(!dropWindow)}}>
                        <div className={s.profileHead}>
                            <ul>
                                <li>
                                    <h5 className={s.fullName}>
                                    <NavLink to={'/'}>
                                        {props.fullName}
                                    </NavLink>
                                    </h5>
                                </li>
                                <li>
                                    <NavLink to={'/'} className={s.email}>email@email.com</NavLink>
                                </li>
                            </ul>


                        </div>
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
                                {props.isAuth ?
                                    <li onClick={props.logout} style={{cursor: 'pointer'}}>
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

                    {/*{props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>*/}
                    {/*    : <NavLink to={'/login'}>Login</NavLink>}*/}

                    {/*{props.isAuth ?*/}
                    {/*    <li onClick={props.logout}>{props.login} Logout</li>*/}
                    {/*    : <li><NavLink to={'/login'}>Login</NavLink></li>}*/}
                </div>
            </div>

        </div>
    </header>
};

export default Header;