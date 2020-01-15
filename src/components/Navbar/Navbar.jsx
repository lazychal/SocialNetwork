import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return <nav className={s.nav}>
        {/*Задали сразу два класснейма, для особых стилей {`${s.item} ${s.active}`}*/}
        <div className={`${s.item} ${s.active}`}>
            <a>Profile</a>
        </div>
        <div className={s.item}>
            <a>Messages</a>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;