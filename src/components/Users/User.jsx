import React from "react";
import s from "./users.module.scss";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {

    return <div className={s.container}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img alt='user picture' src={user.photos.small !== null ? user.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div className={s.buttons}>
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
                    <span className={s.userInfo}>
                        <div className={s.userName}>{user.name}</div>
                        <div className={s.userStatus}>{
                            user.status.length < 20 ? user.status : user.status.slice(0,19) + '...'
                        }</div>
                    </span>
                    {/*<span className={s.userLocation}>*/}
                    {/*    <div>{'user.location.country'}</div>*/}
                    {/*    <div>{'user.location.city'}</div>*/}
                    {/*</span>*/}
                </span>
    </div>
};


export default User;