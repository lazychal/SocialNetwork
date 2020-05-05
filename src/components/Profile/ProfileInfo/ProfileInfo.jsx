import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile){
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            <img src={profile.photos.large} />

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div className='full_name'>Full Name: {profile.fullName}</div>
            <div className='about_me'>About Me: {profile.aboutMe}</div>
            <div className='contacts'>Contacts: {profile.contacts.facebook}</div>
            <div className='looking-for-a-job-description'>Looking for a job. Description: {profile.lookingForAJobDescription}</div>
        </div>
    )
};

export default ProfileInfo;