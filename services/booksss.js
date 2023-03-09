import mongoose from "mongoose";
import Book from "../models/book.js";
import Student from "../models/student.js";
import { getStudent } from "./studentss.js";
import PublicationHouse from "../models/publication_house.js";
/*export const books = [
    {
        id: 1,
        title: 'prog in java',
        price: 9000,
        pages: 450
    },

    {
        id:2,
        title: 'python prog',
        price: 5600,
        pages: 600
    },

    {
        id:3,
        title: 'intelligent investor',
        price: 3000,
        pages: 800
    },
    {
        id:4,
        title: 'got',
        price:4000,
        pages: 566
    }
];*/

export async function createNewBook(data) {
    /*const book = {...data};
    book.id = ++id;
    books.push(book); */
    let book = new Book(data);
    book = await book.save();  
    return book;
}

export async function deleteBook(id) {
    const deletedDoc  =await Book.findByIdAndDelete(id).exec();
    return deletedDoc;
};

export async function getBook(id) {
    const book = await Book
    .findById(id)
    .populate('publicationHouseId')
    .exec();
    return book;    
    };
        

export async function getAllBook() {
    /*const books = await Book.find({
        price: { $gt: 500}
    },{
        publicationHouseId: 0
    }).exec()
    return books; */

    /*const books = await Book
    .find()
    .populate('publicationHouseId',['name','ratings'])
    .exec();
    return books;*/
    
    const books = await Book.find().exec();
    return books;
}


export async function putBook(id, data) {
    return  await Book.findByIdAndUpdate(id,data, {
    returnDocument: "after" 
    }).exec();
    
}

export async function issueBook(studentId,bookId ) {
    


    // let book = await getBook(bookId);
    // book.issuedStudents.push(studentId);
    // book=await book.save();

    // let student = await getStudent(studentId);
    // student.issuanceHistory.push({
    //     bookname : book.title,
    //     action : 'Issued',
    //     date : new Date()
    // });

    // student = await student.save();

    // return [book,student];







    let book = await getBook(bookId); 
    book.issuedStudents.push(studentId);
    book = await book.save();

    let student = await getStudent(studentId);
    student.issuanceHistory.push({
        bookname : book.title,
        action: 'Issued',
        date: new Date()
    });
    student = await student.save();
    return [book,student];
}

//supprots transaction but will work in replicaset environment
/*
export async function issueBook(studentId,bookId ) {
    
    const session = await mongoose.startSession();
    

    session.startTransaction();


    try{
    let book = await getBook(bookId); 
    book.issuedStudents.push(studentId);
    book = await book.save();
    session: session

    let student = await getStudent(studentId);
    Student.isuanceHistory.push({
        bookName: book.title,
        action: 'issued',
        date: new Date()
    });
    student = await student.save();

    await session.commitTransaction();
    
    return [book,student];
}catch(err) {
    await session.abortTransaction();
    throw err;
}finally {
    await session.endSession();
}
}*/
