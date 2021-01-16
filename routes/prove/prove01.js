//Pove01
const express = require('express');
const router = express.Router();
// const path = require('path');

router.get('/',(req, res, next) => {
    res.render('pages/prove/prove01_form', { 
        title: 'Prove01', 
        path: '/prove01_form', // For pug, EJS 
      //   activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  res.render('pages/prove/prove01_response', { 
    title: 'Prove01', 
    path: '/prove01_response', // For pug, EJS 
  //   activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    data: req.body,
});
});

module.exports = router;