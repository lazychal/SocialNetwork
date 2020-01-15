import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
                <div className={s.item}>
                    <img src='https://pp.userapi.com/c851320/v851320155/5ec09/B_32nSfM78A.jpg?ava=1'/>
                    { props.message }
                    <div>
                        <span>Cool</span> {props.cool}
                    </div>

                </div>
    )
}

export default Post;