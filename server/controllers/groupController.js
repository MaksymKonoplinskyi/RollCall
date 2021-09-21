const { Group } = require('../models/models')
const ApiError = require('../error/ApiError')

class GroupController {

    async create(req, res) {
        const { groupName } = req.body
        const group = await Group.create({ groupName })
        return res.json(group)
    }

    async getAll(req, res) {
        const groups = await Group.findAll()
        return res.json(groups)
    }

    async getOne(req, res) {

    }
}
module.exports = new GroupController()      