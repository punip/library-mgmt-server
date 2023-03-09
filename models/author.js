import mongoose from "mongoose";

const { Schema,model} = mongoose;

//schema for the collection 
const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: false
    }

});


export default authorSchema;