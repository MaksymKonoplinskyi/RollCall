import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";
import sidebarReduser from "./sidebarReduser";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi,how', likesCount: 12 },
                { id: 2, message: 'Post 2', likesCount: 11 },
            ],
            newPostText: '444'

        },
        dialogsPage: {
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
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('SC');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReduser(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}




export default store;
