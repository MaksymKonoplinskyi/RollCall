const ApiError = require('../error/ApiError')
const { Student, Teacher, Group } = require('../models/models')

class TeacherController {
    async registration(req, res) {
        const { id, firstName, middleName, lastName, email, department,
            faculty, institute, role } = req.body
        if (!id || !firstName || !middleName || !lastName || !email) {
            return next(ApiError.badRequest('Не все данные заполнены'))
        }
        const candidate = await Teacher.findOne({ where: { email } })
        if (candidate) {
            return next(ApiError.badRequest('Преподаватель с такой почтой уже зарегистрирован'))
        }

        if (candidate) {
            return next(ApiError.badRequest('Студент с такой почтой уже зарегистрирован'))
        }
        candidate = await Teacher.findOne({ where: { department, firstName, lastName } })
        if (candidate) {
            return next(ApiError.badRequest('Преподаватель с такими именем и фамилией уже зарегистрирован на этой кафедре'))
        }
        const teacher = await Teacher.create({
            id, firstName, middleName, lastName, email, department,
            faculty, institute, role
        })

    }


    async login(req, res) {

    }

    async check(req, res) {
        const query = req.query
        res.json(query)
    }

}

module.exports = new TeacherController()