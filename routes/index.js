const { Router } = require('express');
const userRoute = require('./user.route');
const functionalRoute = require('./function.route');
const router = Router();

/* GET home page. */
router.use('/user', userRoute);
router.use('/function', functionalRoute);
router.use('**', (req, res) => {
  res.status(404).send("not found")
});
module.exports = router;
