import { $host, } from "./index"
   

export const regTeacher = async (regData) => {
    debugger
    const response = await $host.post('api/teacher/registration', {...regData, role: 'TEACHER'})
    // export const regTeacher = async (id, firstName, middleName, lastName, 
    //     institute, faculty, department, position, email, id_token) => {
    // const response = await $host.post('api/teacher/registration', {id, firstName, middleName, lastName, 
    //     institute, faculty, department, position, email, role: 'TEACHER', id_token})
    debugger  
    return response
}
