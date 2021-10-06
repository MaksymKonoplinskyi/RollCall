const SET_USER_G_DATA = 'SET_USER_G_DATA';
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    // gUser: {
    //     id: null,
    //     email: null,
    //     name: null,
    //     avaUrl: null,

    // },
    g_id: null,
    email: null,
    g_name: null,
    avaUrl: null,
    id_token: null,


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
export const setUserGData = (g_id, email, g_name, avaUrl, id_token) => ({ type: SET_USER_G_DATA, data: { g_id, email, g_name, avaUrl, id_token } });
export const setUserData = (g_id, email, id_token) => ({ type: SET_USER_DATA, data: { g_id, email, id_token } });

export default googleAuthReduser