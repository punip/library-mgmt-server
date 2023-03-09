import mongoose from "mongoose";
import authorSchema from "./author.js";
import PublicationHouse from "./publication_house.js";
// import publicationHouseSchema from "./publication_house.js";
import Student from "./student.js";

const { Schema, model, ObjectId} = mongoose;

//schema for the collection 
const booksSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
        minLength: 5,
        validate: {
            validator: (v) => {
                return v && !( v.toLowerCase().includes('religion'));
            },
            message: 'cannot give certain words in book titles'
        }
    },

    price: {
        type: Number,
        required: false
    },

    pages: {
        type: Number,
        required: true,
        min: 1
    },
    authors:[authorSchema],

    publicationHouseId: {
        type: Schema.Types.ObjectId ,
        ref: "PublicationHouse"
    },
    issuedStudents: {
        type: Array,
        required: true
},

});

//model for that collection using the schema 
const Book = model('Book', booksSchema);

export default Book;