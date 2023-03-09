import express from "express";
import {handleCreatePublication, handleGetAllPublications} from "../handlers/publication_house.js"


const publicationRouter = express.Router();

// publicationRouter.post('/publications',handleCreateNewPublicationHouse);

publicationRouter.get('/publications',handleGetAllPublications);

publicationRouter.post('/publications',handleCreatePublication);

export default publicationRouter;