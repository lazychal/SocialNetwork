const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Vova'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Monika'},
        {id: 4, name: 'Saul'},
        {id: 5, name: 'Jimmy'}
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Better call Saul'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'}
    ],
    newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            //Изменение state
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            //Записали значение в новую переменную.
            let body = state.newMessageBody;

            // Обнулили значение после сохранения в body(чтобы textarea очистилась после отправки сообщения).
            state.newMessageBody = '';

            //Пушим новое значение из переменной в массив state, обязательно в формате,
            //соотвтествующем формату объекта массива (чтобы по форме и свойствам всё совпадало).
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;