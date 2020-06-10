import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const NewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder='New Post'
                   name='newPostText'
                   component={Textarea}
                   validate={[required, maxLength10]}
            />
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>


};
//Обёртка, контейнер
export const NewPostReduxForm = reduxForm({form: 'post'})(NewPostForm);