import express from "express";
import { handleCreateNewStudent, handleGetStudentById } from "../handlers/students.js";


const studentsRouter = express.Router(); // will apply 


studentsRouter.post('/students',handleCreateNewStudent);
studentsRouter.get('/students/:studentId',handleGetStudentById);

export default studentsRouter;