const SET_USER_G_DATA = 'SET_USER_G_DATA';
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    name: null,
    email: null,
    avaUrl: null,
    isAuth: false,

};

const googleAuthReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_G_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true,
            };

        default:
            return state
    }
}
export const setUserGData = (id, email) => ({ type: SET_USER_G_DATA, data: { id, email } });
export const setUserData = (id, email) => ({ type: SET_USER_DATA, data: { id, email } });

export default googleAuthReduser 