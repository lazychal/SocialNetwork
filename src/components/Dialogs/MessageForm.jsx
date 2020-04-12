import {Field, reduxForm} from "redux-form";
import React from "react";

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder={'Enter your message'} name={'newMessageBody'} component={'textarea'}/>
            </div>
            <div>
                <button>Send it</button>
            </div>
        </form>
    )
};
//Обёртка, контейнер
export const NewMessageReduxForm = reduxForm({form: 'message'})(NewMessageForm);
const MessageForm = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    };
    return <div>
        <NewMessageReduxForm onSubmit={onSubmit}/>
    </div>
};
export default MessageForm;