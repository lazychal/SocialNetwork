import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
// Эта ф-я передаёт state в пропсы.
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
};

let mapDispatchToProps = (dispatch) => {
//Эта ф-я передаёт коллбэки в пропсы.
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;