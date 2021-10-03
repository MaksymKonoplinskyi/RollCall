const Router = require('express')
const router = new Router()
const groupController = require('../controllers/groupController')

router.post('/create',groupController.create)
router.get('/all',groupController.getAll)
router.get('/:id',groupController.getOne)

module.exports = router