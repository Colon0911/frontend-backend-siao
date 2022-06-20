import {Router} from 'express'

import {register, login} from '../controllers/userController.js'
import auth from '../middlewares/auth.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)

export default router
