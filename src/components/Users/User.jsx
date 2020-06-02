import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {

    return <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img alt='user picture' src={user.photos.small !== null ? user.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
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
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
    </div>
};

export default User;