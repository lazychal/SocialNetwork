import React from "react";
import s from "./users.module.scss";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {

    return <div className={s.container}>
                <span>
                    <div className={s.listItemThumb}>
                        <NavLink to={'/profile/' + user.id} className={s.navLink}>
                            <img alt='user picture' src={user.photos.small !== null ? user.photos.small : userPhoto}
                                 />
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
                    <div className={s.listItemInfo}>
                        <h3 className={s.itemTitle}><a href="#">{user.name}</a></h3>
                        <p className={s.itemSubtitle}>
                            <a href="#">
                                { user.status.length < 20 ? user.status
                                    : user.status.slice(0,19) + '...' }
                            </a>
                        </p>
                    </div>
                    {/*<span className={s.userLocation}>*/}
                    {/*    <div>{'user.location.country'}</div>*/}
                    {/*    <div>{'user.location.city'}</div>*/}
                    {/*</span>*/}
                </span>
    </div>
};


export default User;