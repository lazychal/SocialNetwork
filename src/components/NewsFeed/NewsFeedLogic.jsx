import React from 'react';
import s from './NewsFeed.module.scss';
import MyPostsContainer from "../Profile/MyPosts/MyPostsContainer";
import {addPostActionCreator} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import Post from "../Profile/MyPosts/Post/Post";
import {NewPostReduxForm} from "../Profile/MyPosts/NewPostForm";
import {NewPostReduxForm2} from "../Profile/MyPosts/NewPostForm2";

const NewsFeedLogic = (props) => {
    debugger
    let postElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount}/>);
    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    };
    return <div className={s.container}>

        <div className={s.newPostContainer}>
            <div className={s.newPost}>
                <div className={s.userThumb}>
                    <a href="#">
                        <img src="https://sun9-46.userapi.com/c637819/v637819780/546d9/aZtyhuT9wPE.jpg"
                             alt="User Picture"
                        />
                    </a>
                </div>
                <div className={s.shareContentBox}>
                    <NewPostReduxForm2 onSubmit={addNewPost}/>
                </div>
            </div>
        </div>

        <div className={s.postsContainer}>
            <div className={s.card}>Some News</div>
                <MyPostsContainer/>
            <div className={s.card}>Some News</div>
            <div className={s.card}>Some News</div>
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

const NewsFeedLogicContainer = connect(mapStateToProps, mapDispatchToProps)(NewsFeedLogic);

export default NewsFeedLogicContainer;