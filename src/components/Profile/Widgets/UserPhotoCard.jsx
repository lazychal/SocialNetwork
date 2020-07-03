import React from 'react';
import s from './UserPhotoCard.module.scss';
import {useSelector} from "react-redux";

const UserPhotoCard = ({userPic}) => {

    return <div className={s.u}>
        <img src={userPic} alt="User"/>
    </div>
};
export const UserPhotoCardContainer = () => {
    debugger
    const {userPic} = useSelector(state => state.profilePage.profile.photos.small);
    return <UserPhotoCard userPic={userPic}/>
};