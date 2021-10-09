const SET_USER_G_DATA = 'SET_USER_G_DATA';
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {

    g_id: null,
    email: null,
    g_name: null,
    avaUrl: null,
    id_token: null,

    tData:{
    t_id: null,
    g_id: null,
    email: null,
    firstName: null,
    middleName: null,
    lastName: null,
    institute: null,
    faculty: null,
    department: null,
    position: null,
    role: null,    
    },

    isTeacher: false,

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
                tData: { ...action.data.tData },
                isTeacher: true,
            };

        default:
            return state
    }
}
export const setUserGData = (g_id, email, g_name, avaUrl, id_token) => ({ type: SET_USER_G_DATA, data: { g_id, email, g_name, avaUrl, id_token } });
export const setUserData = (tData) => ({ type: SET_USER_DATA, data: { tData } });

export default googleAuthReduser