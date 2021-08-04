const { Router } = require('express');
const userController = require('../controllers/user.controller');
const router = Router();

/* GET users listing. */
router.get('/',userController.testUser)

module.exports = router;
