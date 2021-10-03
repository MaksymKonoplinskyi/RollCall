const Router = require('express')
const router = new Router()
const presentStudentController = require('../controllers/presentStudentController')

router.post('/checkIn',presentStudentController.checkIn)


module.exports = router