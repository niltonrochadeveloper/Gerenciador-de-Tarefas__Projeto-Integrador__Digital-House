const express = require('express')
const router = express.Router()

const updateController = require('../controllers/updateController')

//página inicial
router.get('/quadro', updateController.atualizar_tarefa_de_quadro_post)
             
module.exports = router