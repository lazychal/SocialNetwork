import React from 'react';
import s from './Myposts.module.css'
import Post from "./Post/Post";

const Myposts = () => {
    return (
        <div className={s.posts}>
            My posts
            <div className={s.item}>
                New post
            </div>
            <Post message='Hello my friends!' cool='5'/>
            <Post message='Just relax' cool='456'/>
            <Post message='How are you&' cool='45'/>
            <Post message="That's good idea!" cool='4'/>
        </div>
    )
}

export default Myposts;