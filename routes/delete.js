const express = require('express')
const router = express.Router()

const deleteController = require('../controllers/deleteController')

//página inicial
router.get('/quadro/:id', deleteController.deletar_quadro_get_params)
             
module.exports = router