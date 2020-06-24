import React from "react";
import s from "../users.module.scss";

let UserLocation = () => {

    return <div className={s.userLocation}>
        <div>{'user.location.country'}</div>
        <div>{'user.location.city'}</div>
    </div>
};


export default UserLocation;