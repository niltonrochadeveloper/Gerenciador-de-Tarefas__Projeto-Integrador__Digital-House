const express = require('express')
const router = express.Router()

const createController = require('../controllers/createController')

//página inicial
router.post('/quadro', createController.criar_quadro_post)
             
module.exports = router