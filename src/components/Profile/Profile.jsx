import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import HeaderBackground from "./HeaderBackground/HeaderBackground";
import Ava_desc from "./Ava_desc/Ava_desc";

const Profile = (props) => {

    return <div>
        <HeaderBackground/>
        <Ava_desc/>
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}
        />
    </div>
}

export default Profile;