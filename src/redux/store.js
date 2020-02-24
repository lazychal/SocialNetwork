import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello my friends!', likesCount: 15},
                {id: 2, message: 'Just relax', likesCount: 11},
                {id: 3, message: 'How are you&', likesCount: 1},
                {id: 4, message: "That's good idea!", likesCount: 14},
                {id: 5, message: 'yo', likesCount: 100}
            ],
            newPostText: 'it-kamasutra.com'
        },

        dialogsPage: {
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
        },

        sidebar: {}

    },
    _callSubscriber () {
        console.log('State changed');
    },

    getState(){
        return this._state;
    },
    subscribe (observer) {
        // Функция запускается (там, где мы её оставим коллбэком), и уведомляет НАБЛЮДАТЕЛЯ
        //об изменении state. У нас наблюдатель сидит в файле App, и уведомляет функцию
        // rerenderEntireTree, которая отвечает за отрисовку главного родителя всего SPA -
        // компоненты App, в index.js
        this._callSubscriber = observer;
    },

    dispatch(action){
        // Записываем в state новое занчение profilePage, из функции profileReducer,
        // которая сидит в одноименном файле. И которая преобразовала(если надо) всю нужную инфу.
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        //Уведомили подписчика о изменениях, т.к. редюсеры этим не занимаются.
        this._callSubscriber(this._state);
    }
};

window.store = store;
export default store;