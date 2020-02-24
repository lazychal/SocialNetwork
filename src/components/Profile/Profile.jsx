import React from 'react';
import s from './Profile.module.css';
import HeaderBackground from "./HeaderBackground/HeaderBackground";
import Ava_desc from "./Ava_desc/Ava_desc";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return <div>
        <HeaderBackground/>
        <Ava_desc/>
        <MyPostsContainer/>
    </div>
};

export default Profile;