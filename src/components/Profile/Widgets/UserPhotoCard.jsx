import React from 'react';
import s from './UserPhotoCard.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import defaultUserPic from '../../../assets/images/default-img.jpg';
import {savePhoto} from "../../../redux/profile-reducer";

const UserPhotoCard = ({userPic, userId, onPhotoSelected}) => {

    return <div className={s.userPhotoCard}>
        <img src={userPic || defaultUserPic} alt="User"/>
        {
            !userId &&
            
            <div className={s.editIconContainer} onClick={()=>{}}>
                <input type="file" onChange={onPhotoSelected}/>
                <FontAwesomeIcon icon={faPen} className={s.faPen}></FontAwesomeIcon>
            </div>

        }

    </div>
};
export const UserPhotoCardContainer = ({userId}) => {
    const dispatch = useDispatch();
    const onPhotoSelected = (e) => {
        debugger
        if (e.target.files.length) {
            dispatch(savePhoto(e.target.files[0]))
        }
    };
    const userPic = useSelector(state => state.profilePage.profile.photos.large);
    return <UserPhotoCard
        userPic={userPic}
        userId={userId}
        onPhotoSelected={onPhotoSelected}
    />
};