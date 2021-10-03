const { Group } = require('../models/models')
const ApiError = require('../error/ApiError')

class GroupController {

    async create(req, res, next) {
        try {
            const { groupName } = req.body

            if (!groupName) {
                return next(ApiError.badRequest('Название не может быть пустым'))
            }

            const group = await Group.create({ groupName })
            return res.json(group)
        } catch (e) {

        }
    }

    async getAll(req, res) {
        const groups = await Group.findAll()
        return res.json(groups)
    }

    async getOne(req, res) {
        const { id } = req.params
        const group = await Group.findOne({ where: { id } })
    }

}
module.exports = new GroupController()