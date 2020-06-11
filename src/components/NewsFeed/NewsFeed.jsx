import React from 'react';
import s from './NewsFeed.module.scss';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {addPostActionCreator} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {NewPostFormContainer} from "./MyPosts/NewPostForm";

const NewsFeed = (props) => {
    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    };
    return <div className={s.container}>

        <div className={s.newPostContainer}>
            <NewPostFormContainer onSubmit={addNewPost}/>
        </div>

        <div className={s.postsContainer}>
            <MyPostsContainer/>
        </div>

    </div>
};

let mapStateToProps = (state) => {
// Эта ф-я передаёт state в пропсы.
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
};

let mapDispatchToProps = (dispatch) => {
//Эта ф-я передаёт коллбэки в пропсы.
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        },
    }
};

const NewsFeedContainer = connect(mapStateToProps, mapDispatchToProps)(NewsFeed);

export default NewsFeedContainer;