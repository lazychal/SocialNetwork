import React, {useEffect, useState} from "react";
import s from "../NewsFeed.module.scss";
import {NewPostModalReduxForm} from "../NewPostModal/NewPostModal";
import {useDispatch, useSelector} from "react-redux";
import {getStatus} from "../../../redux/profile-reducer";

const NewPost = ({showModal, setShowModal, addNewPost, userPic}) => {


    return <div className={s.newPost}>

        <div className={s.userThumb}>
            <a href="#">
                <img src={userPic}
                     alt="UserData Picture"
                />
            </a>
        </div>

        <div className={s.shareContentBox}>
            <div>
                <div onClick={() => {
                    setShowModal(true)
                }}>
                    <input className={s.shareTextField}
                           placeholder='Say Something'
                           name='newPostText'
                           type='text'
                    />
                </div>

                <div>
                    <button className={s.shareBtn}>SHARE</button>
                </div>
            </div>
        </div>
        <div className={showModal ? s.show : s.fade}>
            {
                showModal && <NewPostModalReduxForm setShowModal={setShowModal} showModal={showModal} onSubmit={addNewPost}/>
            }

        </div>
    </div>

};
//Обёртка, контейнер

const NewPostContainer = (props) => {
    const [showModal, setShowModal] = useState(false);
    let addNewPost = (values) => {
        props.addPost(values.newPostText);
        setShowModal(false);
    };
    const {userId} = useSelector((state) => state.auth);
    // Диспатчим санку
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStatus(userId))
    }, []);
    return <NewPost showModal={showModal}
                    setShowModal={setShowModal}
                    addNewPost={addNewPost}
                    userPic={props.userPic}
    />

};

export default NewPostContainer;