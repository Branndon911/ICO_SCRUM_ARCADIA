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
router.get('/ConceptoDato',(req, res, next) =>{
  res.render('ConceptoDato',{
    title: 'Concepto Dato'
  });
});
router.get('/InformacionUtil',(req, res, next) =>{
  res.render('InformacionUtil',{
    title: 'Información Útil'
  });
});
router.get('/Componentes',(req, res, next) =>{
  res.render('Componentes',{
    title: 'Componentes'
  });
});
module.exports = router;
