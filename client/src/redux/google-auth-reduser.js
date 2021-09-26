const SET_USER_DATA = 'SET_USER_DATA';



let initialState = {
    id: null,
    // givenName: null,
    // imageURL: null,
    email: null,
    // idToken: null,
    // isAuth: false,
   
};

const googleAuthReduser = (state = initialState, action) => {
    switch (action.type) {
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
export const setUserData = (id, email) => ({ type: SET_USER_DATA, data: { id, email} });


export default googleAuthReduser