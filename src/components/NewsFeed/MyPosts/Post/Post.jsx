import React, {useEffect} from 'react';
import s from './Post.module.scss'
import {NavLink, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect, useDispatch, useSelector} from "react-redux";
import {getUserProfile} from "../../../../redux/profile-reducer";

const Post = (props) => {
    // Достаём userId из state
    const {userId} = useSelector((state) => state.auth);
    // Диспатчим санку
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserProfile(userId))
    }, []);

    return (
        <div className={s.card}>
            <div className={s.postTitle}>
                <div className={s.userThumb}>
                    <a href="#">
                        <img src='https://pp.userapi.com/c851320/v851320155/5ec09/B_32nSfM78A.jpg?ava=1'
                             alt='User Thumb'
                        />
                    </a>
                </div>
                <div className={s.postedAuthor}>
                    <h6 className={s.author}>
                        <NavLink className={s.authorNavLink} to='/profile'>{props.fullName} </NavLink>
                    </h6>
                    <span className={s.time}>20 min ago</span>
                </div>
                <div className={s.postSettingsBar}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className={`${s.postSettings} ${s.arrowShape}`}>
                        <ul>
                            <li>
                                <button>Copy Link</button>
                            </li>
                            <li>
                                <button>Edit Post</button>
                            </li>
                            <li>
                                <button>Delete Post</button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className={s.postContent}>
                {props.message}
            </div>
            <div className={s.postActions}>
                <button className={s.postLikeBtn}>
                    <i className={s.heartBeat}>

                    </i>
                    <span>
                       {props.like} people like this
                    </span>
                </button>
                <span>
                    <span>

                    </span>
                    <span>

                    </span>
                </span>
            </div>
        </div>
    )
};

const PostContainer = (props) => {
    return <Post fullName={props.fullName} message={props.message} like={props.like}/>

};

let mapStateToProps = (state) => {
    return {
        fullName: state.profilePage.profile.fullName,
    }
};

export default compose(
    connect(mapStateToProps, {}),
    withRouter,
)(PostContainer);