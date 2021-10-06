const ApiError = require('../error/ApiError')
const { Student, Teacher, Group } = require('../models/models')

class TeacherController {
    async registration(req, res, next) {
        try {
            const { g_id, firstName, middleName, lastName, institute, faculty, department,
                position, email, role } = req.body
            if (!g_id || !firstName || !middleName || !lastName || !institute || !faculty || !department
                || !position || !email || !role ) {
                return next(ApiError.badRequest('Не все данные заполнены'))
            }
            // const candidate = await Teacher.findOne({ where: { email } })
            // if (candidate) {
            //     return next(ApiError.badRequest('Преподаватель с таким email уже зарегистрирован'))
            // }

            // if (candidate) {
            //     return next(ApiError.badRequest('Пользователь с таким email уже зарегистрирован как студент'))
            // }
            // candidate = await Teacher.findOne({ where: { department, firstName, lastName } })
            // if (candidate) {
            //     return next(ApiError.badRequest('Преподаватель с такими именем и фамилией уже зарегистрирован на этой кафедре'))
            // } 
            // console.log(id, firstName, middleName, lastName, institute, faculty, department,position, email, role, id_token);
            const teacher = await Teacher.create({
                g_id, firstName, middleName, lastName, institute, faculty, department,
                position, email, role
            })
            res.json(['good', '456'])  
        } catch (e) {

        }  
    }
 

    async refresh(req, res, next) {
        try {

        } catch (e) {

        }  

    }
    async teachers(req, res, next) {
        try {
            const teachers = await Teacher.findAll()
            return res.json(teachers)
        } catch (e) {

        }
    }

    async check(req, res) {
        const query = req.query
        res.json(query)
    }

}

module.exports = new TeacherController()