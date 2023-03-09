import PublicationHouse from "../models/publication_house.js";

// export async function createNewPublication(data) {
//     let publication = new PublicationHouse(data);
//     publication = await publication.save();
//     return publication;
// }

export async function getAllPublicationHouse(){
    const publication = await PublicationHouse.find().exec();
    return publication;
}

export async function createNewPublication(data){
    let publication = new PublicationHouse(data);
    publication = await publication.save();  
    return publication;
}