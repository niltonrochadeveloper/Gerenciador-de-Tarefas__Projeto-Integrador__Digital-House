const express = require('express')
const router = express.Router()

const createController = require('../controllers/createController')

// criar quadro
router.post('/quadro', createController.criar_quadro_post)
             
// criar tarefa
router.post('/tarefa', createController.criar_tarefa_post)

// criar comentário
router.post('/comentario', createController.criar_comentario_post)

module.exports = router