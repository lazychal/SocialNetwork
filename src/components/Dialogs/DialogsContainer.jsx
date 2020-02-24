import React from "react";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {

                //Эта переменная создана для хранения здесь значения dialogsPage.
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                };

                let onNewMessageChange = (body) => {
                    //Диспатчим action в store. Обязательно ставим скобки, т.к. это ActionCreator, и нам его надо вызывать.
                    store.dispatch(updateNewMessageBodyCreator(body))
                };

                return <Dialogs updateNewMessageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={state}
                />
            }
        }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;