import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    return (
        <div className={s.profileInfo}>
            <img src={profile.photos.large || userPhoto}/>
            {isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
            { editMode ? <ProfileDataForm profile={profile}/>
            : <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner}/> }

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div className='full_name'>Full Name: {profile.fullName}</div>
            <div className='about_me'>About Me: {profile.aboutMe}</div>
            <div className='contacts'>Contacts: {profile.contacts.facebook}</div>
            <div className='looking-for-a-job-description'>Looking for a job.
                Description: {profile.lookingForAJobDescription}</div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        { isOwner && <div><button onClick={goToEditMode}>Edit</button></div> }
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            {/*Object.keys деструктуризирует находящиеся в объекте объекты, в массив.*/}
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
};


const Contacts = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
};

export default ProfileInfo;