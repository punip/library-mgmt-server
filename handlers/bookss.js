import mongoose from "mongoose";
import Book from "../models/book.js";
import { issueBook } from "../services/booksss.js";
import { createNewBook,deleteBook,getAllBook,getBook,putBook } from "../services/booksss.js";

export async function handleGetAllBooks(req,res) {
   const books =  await getAllBook();
   res.send(books);
};

export async function handleGetBookById(req,res) {
    const id = req.params.bookId;
    const book = await getBook(id);
    res.send(book)};

export async function handleDeleteBookById(req,res) {
    const id= req.params.bookId;
   // const iBookId = parseInt(bookId);
    await deleteBook(id);
    res.sendStatus(204);
};

export async function handlePostBook (req,res, next)   {
    const data = req.body;
    try{
        const newBook = await createNewBook(data);
        res.status(201).send(newBook)
    }catch(err) {
        next(err);
    }
};

export async  function handlePutBookById (req, res) {
    const data = req.body;
    const id = req.params.bookId;
    const index = await putBook(id,data);
    res.status(200).send(index);
};

export async function handleIssueBook(req, res, next) {
  
    try {
        const{studentId,bookId} = req.params;
        await issueBook(studentId,bookId);
        res.sendStatus(200);
    }catch(err) {
        next(err);
    }
   
}
