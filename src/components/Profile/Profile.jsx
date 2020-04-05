import React from 'react';
import HeaderBackground from "./HeaderBackground/HeaderBackground";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return <div>
        {/*<HeaderBackground profile={props.profile}/>*/}
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
};

export default Profile;