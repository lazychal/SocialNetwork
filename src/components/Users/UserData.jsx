import React from "react";
import s from "./users.module.scss";
import FollowButtons from "./UserDataFiles/FollowButtons";
import UserLocation from "./UserDataFiles/UserLocation";
import UserName from "./UserDataFiles/UserName";
import UserStatus from "./UserDataFiles/UserStatus";
import UserPhoto from "./UserDataFiles/UserPhoto";

let UserData = ({user, followingInProgress, unfollow, follow}) => {

    return <div className={s.container}>
                <div>
                    <UserPhoto user={user}/>
                </div>
                <div>
                    <div className={s.listItemInfo}>
                        <UserName user={user}/>
                        <UserStatus user={user}/>
                    </div>

                    <UserLocation/>
                    <FollowButtons user={user} followingInProgress={followingInProgress}
                                   unfollow={unfollow} follow={follow}
                    />
                </div>
    </div>
};

export default UserData;