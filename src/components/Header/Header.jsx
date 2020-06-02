import React from 'react';
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.container}>
            <div className={s.row}>
                <div className={s.mainMenu}>
                    <nav>
                        <ul className={s.navUl}>
                            <li><NavLink to='/' className={s.navLink}>Home</NavLink></li>
                            <li><NavLink to='' >Message</NavLink></li>
                            <li><NavLink to='' >Notification</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className={s.logo}>
                    <img alt='logo' src='https://www.watersignal.com/wp-content/uploads/2016/05/footstep_icon2-150x150.png'/>
                </div>
                <div className={s.loginBlock}>
                    <div className={s.searchContainer}>
                        <form className={s.topSearchBox} action="">
                            <input type="text" placeholder='Search' className={s.topSearchField}></input>
                            <button className={s.topSearchBtn}>S</button>
                        </form>
                    </div>
                    {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </div>
    </header>
};

export default Header;