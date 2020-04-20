import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const  maxLength100 = maxLengthCreator(100);

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder={'Enter your message'}
                        name={'newMessageBody'}
                        component={Textarea}
                        validate={[required, maxLength100]}
                />
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