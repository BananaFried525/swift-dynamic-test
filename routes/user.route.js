const { Router } = require('express');
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const router = Router();

/* GET users listing. */
router.post('/login', userController.login);
router.post('/approve-report', authController.verifyToken, userController.approveReport);

module.exports = router;
