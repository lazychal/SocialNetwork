import React from "react";
import s from "../users.module.scss";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.png";

let UserPhoto = ({user}) => {

    return <div className={s.listItemThumb}>
        <NavLink to={'/profile/' + user.id} className={s.navLink}>
            <img alt='user picture' src={user.photos.small !== null ? user.photos.small : userPhoto}
            />
        </NavLink>
    </div>
};


export default UserPhoto;