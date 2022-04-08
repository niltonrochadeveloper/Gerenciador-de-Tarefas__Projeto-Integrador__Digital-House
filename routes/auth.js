const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

//login
router.get('/login', authController.login)
router.post('/login', authController.autenticar_post)
router.get('/cadastrar', authController.cadastrar)
router.post('/cadastrar', authController.cadastrar_novo_usuario_post)
router.get('/sair', authController.logout)
             
module.exports = router