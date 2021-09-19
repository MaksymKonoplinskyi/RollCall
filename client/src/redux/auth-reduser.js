const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    // isFetching: true,
};

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true,

            };



        // case TOGGLE_IS_FETCHING: {
        //     return { ...state, isFetching: action.isFetching }
        // }

        default:
            return state
    }
}
export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });
// export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
// export const setUsers = (users) => ({ type: SET_USERS, users });
// export const setCurrentPage = (currentPage) => ({ type: SET_CURENT_PAGE, currentPage });
// export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
// export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default authReduser