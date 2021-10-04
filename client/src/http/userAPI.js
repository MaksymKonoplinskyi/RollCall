import { $host, $authHost } from "./index"


export const regTeacher = async (id, firstName, middleName, lastName, 
    institute, faculty, department, position, email, id_token) => {
    const response = await $host.post('api/teacher/registration', {id, firstName, middleName, lastName, 
    institute, faculty, department, position, email, role: 'TEACHER', id_token})
    return response
}
