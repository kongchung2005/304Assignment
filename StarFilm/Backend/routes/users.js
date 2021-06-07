const express = require('express')
const router = express.Router()

const User_Controller  = require(`../controllers/users`)

router.post(`/register`, User_Controller.register)
router.post(`/login`, User_Controller.login)
router.put(`/change`, User_Controller.change)   //change Password

module.exports = router