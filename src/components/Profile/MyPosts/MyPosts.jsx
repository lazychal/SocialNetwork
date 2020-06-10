import React from 'react';
import s from './Myposts.module.scss';
import Post from "./Post/Post";
import {NewPostReduxForm} from "./PostForm";

const MyPosts = React.memo(props => {
    let postElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount}/>);
    let addNewPost = (values) => {
          props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <NewPostReduxForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
});
export default MyPosts;

