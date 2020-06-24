import React from "react";
import s from "../../Users/users.module.scss";
import UserName from "../../Users/UserDataFiles/UserName";
import UserStatus from "../../Users/UserDataFiles/UserStatus";
import UserPhoto from "../../Users/UserDataFiles/UserPhoto";

let UserCardForFZ = ({user}) => {

    return <>
        <div className={s.listItemThumb}>
            <UserPhoto user={user}/>
        </div>

        <div className={s.listItemInfo}>
            <UserName user={user}/>
            <UserStatus user={user}/>
        </div>
    </>
};

export default UserCardForFZ;

