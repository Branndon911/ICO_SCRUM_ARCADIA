const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
  res.render('index')
});
router.get('/apartado1',(req, res, next) =>{
  res.render('apartado1',{
    title: 'Apartado 1'
  });
});
module.exports = router;
