import React from 'react';
import s from './UserPhotoCard.module.scss';
import {useSelector} from "react-redux";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import defaultUserPic from '../../../assets/images/default-img.jpg'

const UserPhotoCard = ({userPic, userId}) => {

    return <div className={s.userPhotoCard}>
        <img src={userPic || defaultUserPic} alt="User"/>
        {
            !userId &&
            
            <div className={s.editIconContainer} onClick={()=>{}}>
                <input type="file" />
                <FontAwesomeIcon icon={faPen} className={s.faPen}></FontAwesomeIcon>
            </div>

        }

    </div>
};
export const UserPhotoCardContainer = ({userId}) => {

    const userPic = useSelector(state => state.profilePage.profile.photos.large);
    return <UserPhotoCard userPic={userPic} userId={userId}/>
};