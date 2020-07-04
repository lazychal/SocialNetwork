import React from 'react';
import s from './UserPhotoCard.module.scss';
import {useSelector} from "react-redux";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const UserPhotoCard = ({userPic}) => {

    return <div className={s.userPhotoCard}>
        <img src={userPic} alt="User"/>
        <div className={s.editIconContainer}>
                <FontAwesomeIcon icon={faPen} className={s.faPen}></FontAwesomeIcon>
        </div>
    </div>
};
export const UserPhotoCardContainer = () => {

    const userPic = useSelector(state => state.profilePage.profile.photos.large);
    return <UserPhotoCard userPic={userPic}/>
};