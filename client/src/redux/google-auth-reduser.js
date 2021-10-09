const SET_USER_G_DATA = 'SET_USER_G_DATA';
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    gUser:{
    g_id: null,
    email: null,
    g_name: null,
    avaUrl: null,
    id_token: null,    
    },
    

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
                ...action.data,
                gUser: { ...action.data.gUser },
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
export const setUserGData = (gUser) => ({ type: SET_USER_G_DATA, data: { gUser } });
export const setUserData = (tData) => ({ type: SET_USER_DATA, data: { tData } });

export default googleAuthReduser