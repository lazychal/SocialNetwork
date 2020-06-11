import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";
import s from "../NewsFeed.module.scss";

const maxLength10 = maxLengthCreator(10);

const NewPostForm = (props) => {
    return <div className={s.newPost}>

            <div className={s.userThumb}>
                <a href="#">
                    <img src="https://sun9-46.userapi.com/c637819/v637819780/546d9/aZtyhuT9wPE.jpg"
                         alt="User Picture"
                    />
                </a>
            </div>

            <div className={s.shareContentBox}>
                <form onSubmit={props.handleSubmit}>
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
            </div>

        </div>




};
//Обёртка, контейнер
export const NewPostFormContainer = reduxForm({form: 'post'})(NewPostForm);