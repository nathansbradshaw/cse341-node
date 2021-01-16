const express = require('express');
const router = express.Router();
const fs = require('fs');
let bookList = [];
let books;

// Get JSON object
fs.readFile('book.json', (err, data) => {
    if (err) throw err;
    books = JSON.parse((data));
});




router.get('/',(req, res, next) => {
    //store Json onject into local variable for use
    bookList = books
    console.log( bookList);

    res.render('pages/prove/prove02', { 
        title: 'Prove Assignment 02', 
        path: '/prove02', // For pug, EJS ,
        books: bookList
    });
});

router.post('/addBook',(req, res, next) => { 
    //create new object to store in json file
    let bookObj = {
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary
    }

    //Add book to booklist
    bookList.push(bookObj);
    //Save new book list to Json File
    saveData = JSON.stringify(bookList, null, 2); //convert object to strinf
    fs.writeFile('book.json', saveData, (err) => {  //write sting to json file
        if (err) {throw err};
        //store new bookslist into books
        fs.readFile('book.json', (err, data) => {
            if (err) throw err;
            books = JSON.parse((data));
            console.log(books);
        });
      });

   
    res.redirect('/prove02/');
});

module.exports = router;