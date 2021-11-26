const express = require('express')
const router = express.Router()

const homeController = require('../controllers/homeController')

//http://localhost:3000/
router.get('/', homeController.index)

module.exports = router