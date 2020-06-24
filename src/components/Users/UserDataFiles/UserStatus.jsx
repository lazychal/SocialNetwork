import React from "react";
import s from "../users.module.scss";

let UserStatus = ({user}) => {

    return <p className={s.itemSubtitle}>
        <a href="#">
            { user.status.length < 20 ? user.status
                : user.status.slice(0,19) + '...' }
        </a>
    </p>
};


export default UserStatus;