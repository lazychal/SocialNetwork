import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.scss'

const Profile = (props) => {

    return <div className={s.profileWrapper}>
        <ProfileInfo isOwner={props.isOwner}
                     savePhoto={props.savePhoto}
                     profile={props.profile}
                     status={props.status}
                     saveProfile={props.saveProfile}
                     updateStatus={props.updateStatus}/>
        <MyPostsContainer props={props}/>
    </div>
};

export default Profile;