const express = require('express')
const router = express.Router()

const deleteController = require('../controllers/deleteController')

// deletar usuário
router.get('/usuario/:id', deleteController.deletar_usuario_get_params)

// deletar área
router.get('/area/:id', deleteController.deletar_area_get_params)

// deletar quadro
router.get('/quadro/:id', deleteController.deletar_quadro_get_params)

// deletar tarefa
router.get('/tarefa/:id', deleteController.deletar_tarefa_get_params)

// deletar comentário
router.get('/comentario/:id', deleteController.deletar_comentario_get_params)
             
module.exports = router