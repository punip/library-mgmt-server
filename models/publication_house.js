import mongoose from "mongoose"; 

const { Schema,model } = mongoose;

const publicationHouseSchema = new Schema({
    // name: {
    //     type: String,
    //     required: true
    // },
    // rating: {
    //     type: Number,
    //     required: true
    // },
    // establishmentDate:  {
    //     type: Date,
    //     required: false
    // }
    name : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : false
    },
    establishmentDate : {
        type : Date,
        required : true
    }
});

const PublicationHouse = model('PublicationHouse',publicationHouseSchema);
export default PublicationHouse;