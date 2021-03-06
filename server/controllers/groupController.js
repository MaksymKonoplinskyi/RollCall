const { Group } = require('../models/models')
const ApiError = require('../error/ApiError')

class GroupController {

    async create(req, res, next) {
        try {
            const { groupName, institute, faculty, department, groupLeaderId, criator_g_id } = req.body
            if (!groupName || !institute || !faculty || !department) {
                return next(ApiError.badRequest('Не всі поля заповнені'))
            }
            if (!criator_g_id) {
                return next(ApiError.badRequest('Ви не увійшли до системи'))
            }
            const candidate = await Group.findOne({ where: { groupName } })
            if (candidate) {
                return next(ApiError.badRequest('Группа з такою назвою вже створена'))
            }

            const group = await Group.create({
                groupName, institute, faculty, department, groupLeaderId, criator_g_id
            })
            return res.json(group)
        } catch (e) {

        }
    }

    async getAll(req, res) {
        const { institute, faculty, department, limit, page } = req.query
page = page || 1
limit = limit || 8
let offset = page * limit - limit

        let groups
        if (!institute && !faculty && !department) {
            groups = await Group.findAndCountAll({ limit, offset })
        }
        if (!institute && !faculty && department) {
            groups = await Group.findAndCountAll({ where: { department }, limit, offset })
        }
        if (!institute && faculty && !department) {
            groups = await Group.findAndCountAll({ where: { faculty }, limit, offset })
        }
        if (!institute && faculty && department) {
            groups = await Group.findAndCountAll({ where: { faculty, department }, limit, offset })
        }
        if (institute && !faculty && !department) {
            groups = await Group.findAndCountAll({ where: { institute }, limit, offset })
        }
        if (institute && !faculty && department) {
            groups = await Group.findAndCountAll({ where: { institute, department }, limit, offset })
        }
        if (institute && faculty && !department) {
            groups = await Group.findAndCountAll({ where: { institute, faculty }, limit, offset })
        }
        if (institute && faculty && department) {
            groups = await Group.findAndCountAll({ where: { institute, faculty, department }, limit, offset })
        }

        return res.json(groups)
    }

    async getOne(req, res) {
        const { id } = req.params
        const group = await Group.findOne({ where: { id } })
    }

}
module.exports = new GroupController()