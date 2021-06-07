const express = require('express')
const router = express.Router()

const Figure_Controller  = require(`../controllers/figures`)
const authenticate = require('../middleware/authenticate')

router.get(`/`, /*authenticate,*/ Figure_Controller.showAll)
router.post(`/show`, Figure_Controller.show)
router.post(`/add`, Figure_Controller.add)
router.post(`/update`, Figure_Controller.update)
router.post(`/delete`, Figure_Controller.destroy)

module.exports = router