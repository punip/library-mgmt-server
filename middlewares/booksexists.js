import {getBook } from "../services/booksss.js";

export default function bookExists(req, res, next) {
    const id = req.params.bookId;
    //const iBookId = parseInt(bookId);
    const book = getBook(id)
    if(book) {
        next();
    }else {
        res.sendStatus(404); // book resource was not found 
    }

    }
