import createNewStudent, { getStudent} from "../services/studentss.js";
import mongoose from "mongoose";

export async function handleCreateNewStudent(req,res, next){
    
    try{
        const data = req.body;
        const Student = await createNewStudent(data);
    res.status(201).send(Student);
    }catch(err) {
        next(err);
    }

}

export async function handleGetStudentById(req,res) {
    const id = req.params.studentId;
    const student = await getStudent(id);
    res.status(200).send(student)
;}