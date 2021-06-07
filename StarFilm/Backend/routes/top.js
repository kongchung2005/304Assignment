const express = require('express')
const router = express.Router()

const Top_Controller  = require(`../controllers/top`)
const authenticate = require('../middleware/authenticate')

router.get(`/`,/* authenticate,*/ Top_Controller.showAll)
router.post(`/show`, Top_Controller.show)
router.post(`/add`, Top_Controller.add)
router.post(`/update`, Top_Controller.update)
router.post(`/delete`, Top_Controller.destroy)

module.exports = router