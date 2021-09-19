const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDETE_NEW_MESSAGE_TEXT = 'UPDETE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Haha' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'YoYoYo' },
    ],
    newMessageText: '777',

    dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
    ],
}

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText,
                likesCount: 0,
            };
            let stateCopy = {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: '',
            };

            return stateCopy;
        }
        case UPDETE_NEW_MESSAGE_TEXT: {
            let stateCopy = {
                ...state,
                newMessageText: action.newText,
            };
            return stateCopy;
        }
        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updeteNewMessageTextActionCreator = (text) => ({
    type: UPDETE_NEW_MESSAGE_TEXT,
    newText: text
})

export default dialogsReduser