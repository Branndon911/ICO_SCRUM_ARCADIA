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
router.get('/apartado2',(req, res, next) =>{
  res.render('apartado2',{
    title: 'Apartado 2'
  });
});
router.get('/TPS',(req, res, next) =>{
  res.render('TPS',{
    title: 'TPS'
  });
});
router.get('/CRM',(req, res, next) =>{
  res.render('CRM',{
    title: 'CRM'
  });
});
router.get('/MIS',(req, res, next) =>{
  res.render('MIS',{
    title: 'MIS'
  });
});
router.get('/apartado3',(req, res, next) =>{
  res.render('apartado3',{
    title: 'Apartado 3'
  });
});
module.exports = router;
