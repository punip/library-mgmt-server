import Student from "../models/student.js"

export default async function createNewStudent(data) {
    let student = new Student(data);
    student = await student.save();
    return student;

}

export async function getStudent(studentId) {
    const student= await Student.findById(studentId).exec();
    return student;

    };