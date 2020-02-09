let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
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
        ]
    }

}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;