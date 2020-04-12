import {Field, reduxForm} from "redux-form";
import React from "react";

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder={'New Post'} name={'newPostText'} component={'textarea'}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
};
//Обёртка, контейнер
export const NewPostReduxForm = reduxForm({form: 'post'})(NewPostForm);
const PostForm = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    };
    return <div>
        <h3>My Posts</h3>
        <NewPostReduxForm onSubmit={onSubmit}/>
    </div>
};
export default PostForm;