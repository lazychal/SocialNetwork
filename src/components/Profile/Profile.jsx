import React from 'react';
import s from './Profile.module.css'
import Myposts from "./MyPosts/Myposts";
import HeaderBackground from "./HeaderBackground/HeaderBackground";
import Ava_desc from "./Ava_desc/Ava_desc";

const Profile = () => {
    return <div>
        <HeaderBackground/>
        <Ava_desc/>
        <Myposts/>
    </div>
}

export default Profile;