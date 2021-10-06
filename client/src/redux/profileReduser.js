const ADD_POST = 'ADD-POST';
const UPDETE_NEW_POST_TEXT = 'UPDETE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi,how', likesCount: 12 },
        { id: 2, message: 'Post 2', likesCount: 11 },
    ],
    newPostText: '444',
    profile: null,
};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0,
            };
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };

            return stateCopy;
        }
        case UPDETE_NEW_POST_TEXT: {
            let stateCopy = {
                ...state,
                newPostText: action.newText,
            };
            return stateCopy;
        } 
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
 
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updeteNewPostTextActionCreator = (text) => ({
    type: UPDETE_NEW_POST_TEXT,
    newText: text
});

export default profileReduser