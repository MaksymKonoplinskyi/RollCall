const { RollCall } = require('../models/models')
const ApiError = require('../error/ApiError')

class RollCallController {

    async create(req, res, next) {
        try {
            const { groupId, creatorId, date, day, startTime, endTime, lessonNamber, pass } = req.body

            const rollCall = await RollCall.create({ groupId, creatorId, date, day, startTime, endTime, lessonNamber, pass, presentListId })
            return res.json(rollCall)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async checkIn(req, res, next) {
        try {
            const { rollCallId, studentId} = req.body
            if (false) {
                return next(ApiError.badRequest('Перекличка закончилась'))
            }
            const present = true
            const presentStudent = await PresentStudent.create({ rollCallId, studentId, present})
            return res.json(presentStudent)  
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    // async getOne(req, res) {
    //     const rollCall = await RollCall.findOne()
    //     return res.json(rollCall)
    // }
    async getAll(req, res) {
        const { groupId, creatorId, date, day, lessonNamber } = req.query
        let rollCalls
        if (groupId && creatorId && !date && !day && !lessonNamber)
            rollCalls = await RollCalls.findAll({ where: { groupId, creatorId } })
            return res.json(rollCalls)
    }

}

module.exports = new RollCallController()