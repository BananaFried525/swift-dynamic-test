const { Router } = require('express');
const userRoute = require('./user.controller')
const router = Router();

/* GET home page. */
router.use('/user',userRoute);
router.use('**',(req,res)=>{
  res.status(404).send("not found")
});
module.exports = router;
