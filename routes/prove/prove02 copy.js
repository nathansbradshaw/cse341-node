const express = require('express');
const router = express.Router();
const fs = require('fs');
let books;
let booksArray = [];
let bookList;
let bookListArray = [];
let bookObj;
let saveData;


fs.readFile('book.json', (err, data) => {
    if (err) throw err;
    books = JSON.parse((data));
    console.log(books);
});

router.get('/',(req, res, next) => {
    //Check to make sure variables exist
    console.log( bookList);
    

    
    res.render('pages/prove/prove02', { 
        title: 'Prove Assignment 02', 
        path: '/prove02', // For pug, EJS ,
        books: books
    });
});

router.post('/addBook',(req, res, next) => {
    // console.log(req.body);
    fs.readFile('book.json', (err, data) => {
        if (err) throw err;
        bookList = JSON.parse(data);
        console.log(bookList);
    });

    bookObj = {
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary
    }

    if ( (typeof bookList !== 'undefined' && bookList) &&  typeof bookObj !== 'undefined' && bookObj) {
        if(bookObj.title == "") {
            bookObj.title = "Unknown Title"
        }
        if(bookObj.author == "") {
            bookObj.author = "Unknown Author"
        }
        if(bookObj.summary == "") {
            bookObj.summary = "No Summary"
        }
        bookList.push(bookObj); // Variables exist so add array to booklist
        // console.log(bookList);  
        saveData = JSON.stringify(bookList, null, 2); //convert object to strinf
        fs.writeFile('book.json', saveData, (err) => {  //write sting to json file
            if (err) {throw err};
            fs.readFile('book.json', (err, data) => {
                if (err) throw err;
                books = JSON.parse((data));
                console.log(books);
            });
          });
    }
    res.redirect('/prove02/');
});

module.exports = router;