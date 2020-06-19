import s from "./NewPostModal.module.scss";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStatus} from "../../../redux/profile-reducer";

const maxLength1200 = maxLengthCreator(1200);

const NewPostModal = (props) => {



    return <div className={s.container}>
        <div className={s.header}>
            Share Your Mood
            <span className={s.closeTheWindow} onClick={() => props.setShowModal(false)}>x</span>
        </div>

        <form onSubmit={props.handleSubmit}>
            <div className={s.body}>
                <Field className={s.shareTextField}
                       placeholder='Say Something'
                       name='newPostText'
                       component={Textarea}
                       validate={[required, maxLength1200]}
                       wrap="soft"
                       cols='20'
                />
            </div>

            <div className={s.footer}>
                <button className={s.cancelBtn} onClick={() => props.setShowModal(false)}>CANCEL</button>
                <button className={s.shareBtn} >POST</button>
            </div>
        </form>

    </div>

};
export const NewPostModalReduxForm = reduxForm({form: 'modalPost'})(NewPostModal);
