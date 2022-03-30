const express = require('express')
const router = express.Router()

const indexController = require('../controllers/indexController')

//página inicial
router.get('/', indexController.index)

//login
router.get('/login', indexController.login)
router.post('/autenticar', indexController.autenticar)
router.get('/sair', indexController.logout)
             
module.exports = router