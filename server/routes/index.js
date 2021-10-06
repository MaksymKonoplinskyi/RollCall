const Router = require('express')
const router = new Router()
const groupRouter = require('./groupRouter')
const rollCallRouter = require('./rollCallRouter')
const studentRouter = require('./studentRouter')
const teacherRouter = require('./teacherRouter')
 
 
router.use('/student', studentRouter)
router.use('/teacher', teacherRouter)
router.use('/group', groupRouter)
router.use('/rollCall', rollCallRouter)
 
module.exports = router
 
  