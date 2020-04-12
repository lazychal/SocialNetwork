import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {NewMessageReduxForm} from "./MessageForm";

const Dialogs = (props) => {

    //Эта переменная создана для хранения здесь значения dialogsPage.
    let state = props.dialogsPage;
    // Теперь мы получаем данные из переменной state, где по факту сидит dialogsPage из глобального store.
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <NewMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

export default Dialogs;