
const express = require('express')
const router = express.Router()
const {
  registerUser,
  getUser,
  getUsers,
  loginUser
} = require('../controllers/userConroller')
const { protect } = require('../middleware/authMiddleware');
const { protectAdmin } = require('../middleware/adminAuthMiddleware');

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/user', protect, getUser)
router.get('/list', protectAdmin, getUsers)

module.exports = router