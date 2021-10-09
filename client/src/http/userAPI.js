import { $host, } from "./index"


export const regTeacher = async (regData) => {
    const response = await $host.post('api/teacher/registration', { ...regData })
    // export const regTeacher = async (id, firstName, middleName, lastName, 
    //     institute, faculty, department, position, email, id_token) => {
    // const response = await $host.post('api/teacher/registration', {id, firstName, middleName, lastName, 
    //     institute, faculty, department, position, email, role: 'TEACHER', id_token})
    return response
}

export const getTeacherData = async (g_id) => {
    // const response = await $host.get('api/teacher/data?g_id=100037699072885750750', )
    const response = await $host.get(`api/teacher/data?g_id=${g_id}`,)
    // const response = await $host.get('api/teacher/data', { g_id })
    return response
}