import React from "react";
import s from "../users.module.scss";

let UserStatus = ({user}) => {

    return <p className={s.itemSubtitle}>
        <a href="#">
            { user.status.length < 15 ? user.status
                : user.status.slice(0,14) + '...' }
        </a>
    </p>
};


export default UserStatus;