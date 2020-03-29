import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    //Эта переменная создана для хранения здесь значения dialogsPage.
    let state = props.dialogsPage;

    // Теперь мы получаем данные из переменной state, где по фактуо сидит dialogsPage из глобального store.
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

// Эта функция изменяет state, при каждом новом введенном символе в поле textarea.
// (e) - это event -  событие, на которое реагирует функция.
    let onNewMessageChange = (e) => {
        // Здесь target, это textarea, при событии (e), мы берем у неё текужее значение(value).
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;