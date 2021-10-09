import * as axios from 'axios'

export const getUsers = (currentPage = 2, pageSize = 10) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    })
    .then (response => response.data)
}

// export const authMy = () => {
//     return axios.get('http://localhost:5000/google', {
        
//     })
//     .then (response => response.data)
// }

