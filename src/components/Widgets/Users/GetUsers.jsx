import React, {useEffect} from 'react';
import s from './GetUsers.module.scss';
import {getFollowingInProgress, getIsFetching, getUsers} from "../../../redux/users-selectors";
import {connect, useDispatch} from "react-redux";
import {compose} from "redux";
import User from "../../Users/User";
import {requestUsers, toggleFollowingProgress} from "../../../redux/users-reducer";

const GetUsers = ({users, followingInProgress}) => {

    return <div className={s.container}>
        <h4 className={s.widgetTitle}>Users</h4>
        <div className={s.widgetBody}>
            <ul className={s.usersList}>

                {users.map(u =>
                    <li>
                        <User user={u}
                              key={u.id}
                              followingInProgress={followingInProgress}
                        />
                    </li>
                )
                }

            </ul>
        </div>
    </div>
};

const GetUsersContainer = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        if(props.users.length <5 ){

            dispatch(props.getUsers)
        }
        }, [props.users]
    );
    return <GetUsers users={props.users} followingInProgress={props.followingInProgress}/>
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
)(GetUsersContainer);
