const ApiError = require('../error/ApiError')
const { Student, Teacher, Group } = require('../models/models')

class TeacherController {
    async registration(req, res, next) {
        try {
            const { id, firstName, middleName, lastName, institute, faculty, department,
                position, email, role } = req.body
            if (!id || !firstName || !middleName || !lastName || !institute || !faculty || !department
                || !position || !email || !role) {
                return next(ApiError.badRequest('Не все данные заполнены'))
            }
            const candidate = await Teacher.findOne({ where: { email } })
            if (candidate) {
                return next(ApiError.badRequest('Преподаватель с такой почтой уже зарегистрирован'))
            }

            if (candidate) {
                return next(ApiError.badRequest('Пользователь с такой почтой уже зарегистрирован как студент'))
            }
            candidate = await Teacher.findOne({ where: { department, firstName, lastName } })
            if (candidate) {
                return next(ApiError.badRequest('Преподаватель с такими именем и фамилией уже зарегистрирован на этой кафедре'))
            }
            const teacher = await Teacher.create({
                id, firstName, middleName, lastName, institute, faculty, department,
                position, email, role
            })
        } catch (e) {

        }
    } 


    async refresh(req, res, next) {
        try {

        } catch (e) {

        }

    }
    async techers(req, res, next) {
        try {
            res.json(['123', '456'])
        } catch (e) {

        }

    }

    async check(req, res) {
        const query = req.query
        res.json(query)
    }

}

module.exports = new TeacherController()