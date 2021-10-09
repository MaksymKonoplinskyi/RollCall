const ApiError = require('../error/ApiError')
const { Student, Teacher, Group } = require('../models/models')

class TeacherController {
    async registration(req, res, next) {
        try {
            const { g_id, firstName, middleName, lastName, institute, faculty, department,
                position, email, role } = req.body
            if (!g_id || !firstName || !middleName || !lastName || !institute || !faculty || !department
                || !position || !email || !role) {
                return next(ApiError.badRequest('Не все данные заполнены'))
            }
            const candidate = await Teacher.findOne({ where: { email } })
            if (candidate) {
                return next(ApiError.badRequest('Преподаватель с таким email уже зарегистрирован'))
            }
            const candidate_in_student = await Student.findOne({ where: { email } })
            if (candidate_in_student) {
                return next(ApiError.badRequest('Пользователь с таким email уже зарегистрирован как студент'))
            }
            const candidate_in_department = await Teacher.findOne({ where: { department, firstName, lastName } })
            if (candidate_in_department) {
                return next(ApiError.badRequest('Преподаватель с таким именем и фамилией уже зарегистрирован на этой кафедре'))
            }
            const teacher = await Teacher.create({
                g_id, firstName, middleName, lastName, institute, faculty, department,
                position, email, role
            })
            res.json(['good', '456'])
        } catch (e) {

        }
    }

    async data(req, res, next) {
        try {
            const { g_id } = req.query
            console.log(g_id);
            if (!g_id) {
                return next(ApiError.badRequest('Пользователь не авторизован'))
            }
            const teacherData = await Teacher.findOne({ where: { g_id } })
            res.json(teacherData)
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