const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

//login
router.get('/login', authController.login)
router.post('/login', authController.autenticar)
router.get('/sair', authController.logout)
             
module.exports = router