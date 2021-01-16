//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();
const usernames = [] ;
let error = '';

router.get('/',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'Team Activity 02', 
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        usernames: usernames,
        errorUsername: req.body.Uname,
        error: error,
    });
});

router.post('/addUser',(req, res, next) => {
    // console.log(req.body);
    usernames.push(req.body.Uname)
    // console.log(usernames);
    res.redirect('/ta02/');
});

router.post('/removeUser',(req, res, next) => {
    // console.log(req.body);
    const index = usernames.indexOf(req.body.Uname)

    if(index > -1) {
        error = '';
        usernames.splice(index, 1)
    } else {
        error = 'Error name not found';
    }
    // console.log(usernames);
    res.redirect('/ta02/');
});


module.exports = router;