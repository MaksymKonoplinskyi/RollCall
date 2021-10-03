const { PresentStudent } = require('../models/models')
const ApiError = require('../error/ApiError')

class PresentStudentController {


    async checkIn(req, res, next) {
        try {
            const { rollCallId, studentId } = req.body
            if (false) {
                return next(ApiError.badRequest('Перекличка закончилась'))
            }
            const present = true
            const presentStudent = await PresentStudent.create({ rollCallId, studentId, present })
            return res.json(presentStudent)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new PresentStudentController()