import { $host, } from "./index"


export const regTeacher = async (regData) => {
    const response = await $host.post('api/teacher/registration', { ...regData })
    return response
}

export const getTeacherData = async (g_id) => {
    const response = await $host.get(`api/teacher/data?g_id=${g_id}`,)
    return response
}

export const getStudentData = async (g_id) => {
    const response = await $host.get(`api/student/data?g_id=${g_id}`,)
    return response
}


export const regGroup = async (regData) => {
    const response = await $host.post('api/group/create', { ...regData })
    return response
}

export const getGroups = async (g_id) => {
    const response = await $host.get('api/group/all',)
    return response
}

// export const getUser = (g_id = 2, ) => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
//         withCredentials: true
//     })
//     .then (response => response.data)
// }

// axios
//             .get(`http://localhost:5000/api/teacher/data?g_id=${props.g_id}`)
//             .then(response => console.log(response.data))

export const getCurentTeacherData = async (g_id) => {
    const response = await $host.get(`api/teacher/data?g_id=${g_id}`,)
    return response
}