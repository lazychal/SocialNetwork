import React, {useEffect} from 'react';
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";

const ProfileContainer = (props) => {
    // const match = useRouteMatch()
    const userId = props.router.match.params.userId;
    const dispatch = useDispatch();
    // useEffect(
    //     {if (userId) {dispatch(getUserProfile(userId))}}, [userId]
    // );
    const profile = useSelector(state => state.profilePage.profile);
    return <Profile profile={profile} userId={userId}/>
};
export default ProfileContainer;