const SET_USER_G_DATA = 'SET_USER_G_DATA';
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    // gUser: {
    //     id: null,
    //     email: null,
    //     name: null,
    //     avaUrl: null,

    // },
    id: null,
    email: null,
    g_name: null,
    avaUrl: null,



};

const googleAuthReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_G_DATA:

            return {
                ...state,
                ...action.data
                
                // gUser: { ...state.gUser },
                // isAuth: true,
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
export const setUserGData = (id, email, g_name, avaUrl) => ({ type: SET_USER_G_DATA, data: { id, email, g_name, avaUrl } });
export const setUserData = (id, email) => ({ type: SET_USER_DATA, data: { id, email } });

export default googleAuthReduser