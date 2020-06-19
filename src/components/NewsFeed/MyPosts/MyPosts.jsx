import React from 'react';
import s from '../NewsFeed.module.scss';
import PostContainer from "./Post/Post";

const MyPosts = React.memo(props => {

    let postElements = props.posts.reverse().map(p => <PostContainer key={p.id} message={p.message} like={p.likesCount}/>);

    return (
        <div className={s.postsContainer}>
                {postElements}
        </div>
    )
});
export default MyPosts;

