const express = require('express'),
  router = express.Router();

router.get('/',(req,res) => {
  res.render('home',{section:'Home'});
});
router.get('/home',(req,res) => {
  res.render('home',{section:'Home'});
});
router.get('/contact',(req,res) => {
  res.render('contact',{section:'Contact'});
});

module.exports =  router;