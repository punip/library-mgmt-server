import {createNewPublication,  getAllPublicationHouse } from "../services/publication.js";
// import mongoose from "mongoose";

// export async function handleCreateNewPublicationHouse(res,req,next) {
//     const data = req.body;
//     try{
//         const newPublicationHouse = await createNewPublication(data);
//         res.status(201).send(newPublicationHouse)
//     }catch(err) {
//         console.log(err);
//     }
// };


export async function handleGetAllPublications(req,res){
    const publication = await getAllPublicationHouse();
    res.status(200).send(publication);
}


export async function handleCreatePublication(req,res,next){
    const data = req.body;
    try{
        const newPublication = await createNewPublication(data);
        res.status(201).send(newPublication)
    }catch(err) {
        console.log(err);
    }
}