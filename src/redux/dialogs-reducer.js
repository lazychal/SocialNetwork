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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            //Записали значение в новую переменную.
            let body = action.newMessageBody;

            return {
                ...state,
                messages: [
                    ...state.messages,
                    {id: 6, message: body}
                    ]
            };

        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;