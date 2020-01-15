import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return <header className={s.header}>
        <div className={s.logo}>
            <img src='https://www.watersignal.com/wp-content/uploads/2016/05/footstep_icon2-150x150.png'/>
        </div>
    </header>
}

export default Header;