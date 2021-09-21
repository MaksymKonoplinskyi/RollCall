const { RollCall } = require('../models/models')
const ApiError = require('../error/ApiError')

class RollCallController {

    async create(req, res) {
        const { date } = req.body
        const rollCall = await RollCall.create({ date })
        return res.json(rollCall)
    }

    async getAll(req, res) {
        const rollCalls = await RollCall.findAll()
        return res.json(rollCalls)
    }
    async getOne(req, res) {

    }

}

module.exports = new RollCallController()