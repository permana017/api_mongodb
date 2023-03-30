const express = require('express')
const router = express()
const userRouter = require('./user.view')




router.get('/', (req, res) => {
    res.send('Hello World!')
  })
router.use('/user', userRouter)



module.exports = router
  