const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {

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
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;