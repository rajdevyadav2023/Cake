const { Router } = require('express')
const { signUpUser, loginUser, userProfile } = require('../controllers/users_controller')

const router = Router()

router.post('/signup', signUpUser)
router.post('/login', loginUser)
router.get('/profile', userProfile)

module.exports = router;