const express = require('express')
const router = express.Router()

const updateController = require('../controllers/updateController')

// atualizar dados de usuário
router.get('/usuario/:id', updateController.atualizar_dados_de_usuario_post)

// atualizar dados de área
router.get('/area/:id', updateController.atualizar_dados_de_area_post)

// atualizar quadro
router.get('/quadro/:id', updateController.atualizar_quadro_post)

// atualizar tarefa de quadro
router.post('/tarefa/:id', updateController.atualizar_tarefa_de_quadro_post)
router.post('/tarefa-de-quadro/:id', updateController.trocar_tarefa_de_quadro_post)


// atualizar comentário de tarefa
router.get('/comentario/:id', updateController.atualizar_comentario_de_tarefa_post)
             
module.exports = router