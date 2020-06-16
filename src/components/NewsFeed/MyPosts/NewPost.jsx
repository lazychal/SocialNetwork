import React, {useState} from "react";
import s from "../NewsFeed.module.scss";
import {NewPostModalContainer} from "../NewPostModal/NewPostModal";

const NewPost = ({showModal, setShowModal, addNewPost}) => {


    return <div className={s.newPost}>

        <div className={s.userThumb}>
            <a href="#">
                <img src="https://sun9-46.userapi.com/c637819/v637819780/546d9/aZtyhuT9wPE.jpg"
                     alt="User Picture"
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
                showModal && <NewPostModalContainer setShowModal={setShowModal} showModal={showModal} onSubmit={addNewPost}/>
            }

        </div>
    </div>

};
//Обёртка, контейнер

const NewPostContainer = (props) => {
    const [showModal, setShowModal] = useState(false);
    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    };
    return <NewPost showModal={showModal}
                    setShowModal={setShowModal}
                    addNewPost={addNewPost} />

};

export default NewPostContainer;