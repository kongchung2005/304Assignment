const express = require('express')
const router = express.Router()

const Film_Controller  = require(`../controllers/films`)
const authenticate = require('../middleware/authenticate')

router.get(`/`, /*authenticate,*/ Film_Controller.showAll)
router.post(`/show`, Film_Controller.show)
router.post(`/add`, Film_Controller.add)
router.post(`/update`, Film_Controller.update)
router.post(`/delete`, Film_Controller.destroy)

module.exports = router