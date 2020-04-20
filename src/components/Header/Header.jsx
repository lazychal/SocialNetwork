import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.logo}>
            <img src='https://www.watersignal.com/wp-content/uploads/2016/05/footstep_icon2-150x150.png'/>
        </div>
        <div className={s.loginBlock}>
            {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
};

export default Header;