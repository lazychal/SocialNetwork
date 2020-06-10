import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";
import s from "../../NewsFeed/NewsFeed.module.scss";

const maxLength10 = maxLengthCreator(10);

const NewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field className={s.shareTextField}
                   placeholder='Say Something'
                   name='newPostText'
                   component={Textarea}
                   validate={[required, maxLength10]}
            />
        </div>
        <div>
            <button className={s.shareBtn}>SHARE</button>
        </div>
    </form>


};
//Обёртка, контейнер
export const NewPostReduxForm2 = reduxForm({form: 'post'})(NewPostForm);