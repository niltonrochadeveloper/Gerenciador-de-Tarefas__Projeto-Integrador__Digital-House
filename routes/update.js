const express = require('express')
const router = express.Router()

const updateController = require('../controllers/updateController')

// atualizar dados de usuário
router.get('/usuario', updateController.atualizar_dados_de_usuario_post)

// atualizar dados de área
router.get('/area', updateController.atualizar_dados_de_area_post)

// atualizar quadro
router.get('/quadro', updateController.atualizar_quadro_post)

// atualizar tarefa de quadro
router.get('/tarefa', updateController.atualizar_tarefa_de_quadro_post)

// atualizar comentário de tarefa
router.get('/comentario', updateController.atualizar_comentario_de_tarefa_post)
             
module.exports = router