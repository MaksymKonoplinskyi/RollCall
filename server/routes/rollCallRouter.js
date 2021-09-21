const Router = require('express')
const router = new Router()
const rollCallController = require('../controllers/rollCallController')

router.post('/',rollCallController.create)
router.get('/',rollCallController.getAll)


module.exports = router