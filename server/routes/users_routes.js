const { Router } = require('express')
const { signUpUser, loginUser } = require('../controllers/users_controller')

const router = Router()

router.post('/signup', signUpUser)
router.post('/login', loginUser)

module.exports = router;