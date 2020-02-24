import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} like={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>


        </div>
    )
};

export default MyPosts;