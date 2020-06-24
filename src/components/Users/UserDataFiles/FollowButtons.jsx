import React from "react";
import s from "../users.module.scss";

let FollowButtons = ({user, followingInProgress, unfollow, follow}) => {

    return <div className={s.buttons}>
        {user.followed
            ? <button disabled={followingInProgress.some(id => id === user.id)}
                      onClick={() => {
                          unfollow(user.id);
                      }}
                      className={s.unfollow}
            >
                Unfollow
            </button>
            : <button disabled={followingInProgress.some(id => id === user.id)}
                      onClick={() => {
                          follow(user.id);
                      }}
                      className={s.follow}>
                Follow
            </button>}
    </div>
};


export default FollowButtons;