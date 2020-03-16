import React from 'react';
import HeaderBackground from "./HeaderBackground/HeaderBackground";
import Ava_desc from "./Ava_desc/Ava_desc";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return <div>
        <HeaderBackground profile={props.profile}/>
        <Ava_desc profile={props.profile}/>
        <MyPostsContainer/>
    </div>
};

export default Profile;