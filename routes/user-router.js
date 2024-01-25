const express = require('express')
const router = express.Router()
const services = require('../services/user-service')

/* 
    @description Root Route
    @Method GET /
*/
router.get('/', services.homeRoutes)


module.exports = router