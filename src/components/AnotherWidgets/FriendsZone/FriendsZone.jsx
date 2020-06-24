import React, {useEffect} from 'react';
import {connect, useDispatch} from "react-redux";
import {getFollowingInProgress, getIsFetching, getUsers} from "../../../redux/users-selectors";
import {compose} from "redux";
import {requestUsers, toggleFollowingProgress} from "../../../redux/users-reducer";
import s from "./FriendsZone.module.scss";
import heart from "../../../assets/images/icons/heart.png";
import heartColor from "../../../assets/images/icons/heart-color.png";
import UserCardForFZ from "./UserCardForFZ";

const FriendsZone = ({users, followingInProgress}) => {

    return <div className={s.container}>
        <h4 className={s.widgetTitle}>Find Your Friends</h4>
        <div className={s.widgetBody}>
            <ul className={s.pageListWrapper}>
                {
                    users.map(u =>
                    <li className={s.listItem}>
                        <UserCardForFZ user={u}
                                  key={u.id}
                                  followingInProgress={followingInProgress}
                        />
                        <button className={s.likeButton}>
                            <img className={s.heart} src={heart} alt="Heart"/>
                            <img className={s.heartColor} src={heartColor} alt="Red Heart"/>
                        </button>
                    </li>
                    )
                }
            </ul>
        </div>
    </div>
};
const FriendsZoneContainer = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
            if(props.users.length <5 ){
                dispatch(props.getUsers)
            }
        }, [props.users]
    );
    return <FriendsZone users={props.users} followingInProgress={props.followingInProgress}/>
};

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default compose(
    connect(mapStateToProps, {toggleFollowingProgress, getUsers: requestUsers})
)(FriendsZoneContainer);
