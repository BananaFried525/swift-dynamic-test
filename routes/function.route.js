const { Router } = require('express');
const functionConstoller = require('../controllers/function.controller');
const router = Router();

/* GET users listing. */
router.get('/max',functionConstoller.findMax);
router.get('/min',functionConstoller.findMin);
router.get('/average',functionConstoller.findAverage);
router.get('/split/:page',functionConstoller.split);

module.exports = router;
