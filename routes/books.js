import express from "express";
import bookExists from "../middlewares/booksexists.js";
import logit from "../middlewares/logit.js";
import { handleDeleteBookById, handleGetAllBooks, handleGetBookById, handleIssueBook, handlePostBook, handlePutBookById} from "../handlers/bookss.js";
// import { issueBook } from "../services/booksss.js";


const booksRouter = express.Router(); // will apply 
booksRouter.use(logit); // will apply to all routes in the booksRouter
//booksRouter.use(bookExists);

booksRouter.get('/books',handleGetAllBooks);
//GET -- /books/<<id of the book>>
booksRouter.get('/books/:bookId', /*[logit]*/[bookExists],handleGetBookById);
  /*  if(book) {
        res.send(book);
    }else {
        res.sendStatus(404); // book resource was not found 
    }*/


//Delete -- /books/<<id of the book>>

booksRouter.delete('/books/:bookId',/*[bookExists]*/handleDeleteBookById);
   /* if(index !== -1) {
        books.splice(index,1);
        res.sendStatus(204);
    }else {
        res.sendStatus(404); // book resource was not found 
    }*/


//POST --- to create new book--/books
booksRouter.post('/books',handlePostBook);

//PUT --- / books/ <<id of the book >>
booksRouter.put('/books/:bookId',[bookExists], handlePutBookById);
    
    /*if(index !== -1) {
        const data = req.body;
        data.id = bookId;
        books.splice(index,1,data);
        res.sendStatus(201);
    }else {
        res.sendStatus(404);
    }*/

booksRouter.post('/books/:bookId/students/:studentId',handleIssueBook);

export default booksRouter;