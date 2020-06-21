import React, {useEffect, useState} from 'react';
import s from './Post.module.scss'
import {NavLink, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect, useDispatch, useSelector} from "react-redux";
import {getUserProfile} from "../../../../redux/profile-reducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareAlt, faHeart as faHeart1} from "@fortawesome/free-solid-svg-icons";
import {faComment, faHeart} from "@fortawesome/free-regular-svg-icons";

const Post = (props) => {
    // Достаём userId из state
    const {userId} = useSelector((state) => state.auth);
    // Диспатчим санку
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserProfile(userId))
    }, []);
    const [isYouLikeIt, setIsYouLikeIt] = useState(false);
debugger
    return (
        <div className={s.card}>
            <div className={s.postTitle}>
                <div className={s.userThumb}>
                    <a href="#">
                        <img src={props.userPic}
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
                    {
                        isYouLikeIt ?
                            <FontAwesomeIcon icon={faHeart1} className={s.faHeartSolid}></FontAwesomeIcon>
                            :
                            <FontAwesomeIcon icon={faHeart} className={s.faHeart}
                                             onClick={() => {setIsYouLikeIt(!isYouLikeIt)}}></FontAwesomeIcon>
                    }

                    <span> {props.like} people like this </span>

                </button>

                <span className={s.commentShareContainer}>
                    <FontAwesomeIcon icon={faComment} className={s.faComment}></FontAwesomeIcon> 47
                    <FontAwesomeIcon icon={faShareAlt} className={s.faShareAlt}></FontAwesomeIcon> 25
                </span>

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
    return <Post fullName={props.fullName} message={props.message} like={props.like} userPic={props.userPic}/>

};

let mapStateToProps = (state) => {
    return {
        fullName: state.profilePage.profile.fullName,
        userPic: state.profilePage.profile.photos.small
    }
};

export default compose(
    connect(mapStateToProps, {}),
    withRouter,
)(PostContainer);