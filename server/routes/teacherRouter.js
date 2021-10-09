const Router = require('express')
const router = new Router()
const teacherController = require('../controllers/teacherController')

router.post('/registration', teacherController.registration)
router.get('/data', teacherController.data)
router.get('/refresh', teacherController.refresh)
router.get('/teachers', teacherController.teachers)
router.get('/check', teacherController.check)
   

module.exports = router    