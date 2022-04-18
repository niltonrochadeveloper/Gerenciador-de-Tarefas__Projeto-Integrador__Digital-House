const express = require('express')
const router = express.Router()

const indexController = require('../controllers/indexController')

//página inicial
router.get('/', indexController.index)
router.get('/area-de-trabalho/:id', indexController.areasdetrabalho)

             
module.exports = router