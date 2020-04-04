import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {return {dialogsPage: state.dialogsPage}};

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

//Первый вызов compose, это вызов самой ф-и, а второй, это вызов функции, которую вернул compose.

//Что происходит: Берем Dialogs, закидываем в withAuthRedirect, ответ withAuthRedirect
// закидываем в connect.

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);