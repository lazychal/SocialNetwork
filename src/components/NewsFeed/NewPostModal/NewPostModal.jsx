import s from "./NewPostModal.module.scss";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";

const maxLength1200 = maxLengthCreator(1200);

const NewPostModal = (props) => {

    return <div className={s.container}>
        <div className={s.header}>
            Share Your Mood
        </div>

        <form onSubmit={props.handleSubmit}>
            <div className={s.body}>
                <Field className={s.shareTextField}
                       placeholder='Say Something'
                       name='newPostText'
                       component={Textarea}
                       validate={[required, maxLength1200]}
                        autofocus={true}
                />
            </div>

            <div className={s.footer}>
                <button className={s.shareBtn} onClick={() => props.setShowModal(false)}>SHARE</button>
            </div>
        </form>

    </div>

};
export const NewPostModalContainer = reduxForm({form: 'post'})(NewPostModal);
